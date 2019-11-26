import { useCallback, useEffect, useState } from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { RetryLink } from 'apollo-link-retry';
import { getMainDefinition } from 'apollo-utilities';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';

import resolvers from './resolvers';

export default () => {
  const [api, setApi] = useState(null);

  const setup = useCallback(async () => {
    const authorization = () => {
      const token = localStorage.getItem('token');
      return { authorization: token ? `Bearer ${token}` : '' };
    };

    const authLink = setContext(async (_, { headers }) => ({
      headers: {
        ...headers,
        ...authorization(),
      },
    }));

    const retryLink = new RetryLink();

    const httpLink = createHttpLink({
      uri: `http://${process.env.REACT_APP_API_URL}/graphql`,
    });

    const absintheSocketLink = createAbsintheSocketLink(
      AbsintheSocket.create(
        new PhoenixSocket(`ws://${process.env.REACT_APP_API_URL}/socket`, {
          params: () => ({ ...authorization() }),
        }),
      ),
    );

    const requestLink = ApolloLink.split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      absintheSocketLink,
      httpLink,
    );

    const link = ApolloLink.from([authLink, retryLink, requestLink]);

    const cache = new InMemoryCache({
      cacheRedirects: {
        Query: {
          user: (_, { id }, { getCacheKey }) => getCacheKey({ id, __typename: 'UserType' }),
        },
      },
    });

    const client = new ApolloClient({
      cache,
      link,
      resolvers,
    });

    await persistCache({
      cache,
      storage: localStorage,
    });

    setApi(client);
  }, []);

  useEffect(() => {
    setup();
  }, [setup]);

  return api;
};
