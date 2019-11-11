import { useCallback, useEffect, useState } from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { RetryLink } from 'apollo-link-retry';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';

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

    const wsClient = new SubscriptionClient(`wss://${process.env.REACT_APP_API_URL}/graphql`, {
      reconnect: true,
    });
    const webSocketLink = new WebSocketLink(wsClient);
    const requestLink = ApolloLink.split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink,
    );

    const link = ApolloLink.from([authLink, retryLink, requestLink]);

    const cache = new InMemoryCache();

    const data = {
      isSearchBarVisible: false,
    };

    cache.writeData({ data });

    const client = new ApolloClient({
      cache,
      link,
      resolvers,
    });

    client.onResetStore(() => {
      cache.writeData({ data });
    });

    await persistCache({
      cache,
      storage: localStorage,
    });

    setApi(client);
  }, []);

  useEffect(() => {
    setup();
  }, []);

  return api;
};
