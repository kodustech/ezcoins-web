import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { SnackbarProvider } from 'notistack';

import './App.css';

import Routes from './router/routes';
import WithThemeProvider from './hocs/WithThemeProvider';
import useApi from './store/api';

function App() {
  const api = useApi();

  return (
    api && (
      <ApolloProvider client={api}>
        <SnackbarProvider maxSnack={5}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <WithThemeProvider>
              <Routes />
            </WithThemeProvider>
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </ApolloProvider>
    )
  );
}

export default App;
