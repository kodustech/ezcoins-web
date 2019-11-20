import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import './App.css';

import Routes from './router/routes';
import WithThemeProvider from './hocs/WithThemeProvider';
import useApi from './store/api';

function App() {
  const api = useApi();

  return (
    api && (
      <ApolloProvider client={api}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <WithThemeProvider>
            <Routes />
          </WithThemeProvider>
        </MuiPickersUtilsProvider>
      </ApolloProvider>
    )
  );
}

export default App;
