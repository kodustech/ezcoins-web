import { useCallback, useEffect, useState } from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { RetryLink } from 'apollo-link-retry';

import resolvers from './resolvers';

export default () => {
  const [api, setApi] = useState(null);

  const setup = useCallback(async () => {
    const token = localStorage.getItem('token');

    const authLink = setContext(async (_, { headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }));

    const retryLink = new RetryLink();
    const httpLink = createHttpLink({
      uri: `http://${process.env.REACT_APP_API_URL}/graphql`,
    });

    const link = ApolloLink.from([authLink, retryLink, httpLink]);

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
