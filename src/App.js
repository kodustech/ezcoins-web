import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';

import Routes from './router/routes';
import WithThemeProvider from './hocs/WithThemeProvider';
import useApi from './store/api';

function App() {
  const api = useApi();

  return (
    api && (
      <ApolloProvider client={api}>
        <WithThemeProvider>
          <Routes />
        </WithThemeProvider>
      </ApolloProvider>
    )
  );
}

export default App;
