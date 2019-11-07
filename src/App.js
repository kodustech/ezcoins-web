import React from 'react';

import './App.css';

import Routes from './router/routes';
import WithThemeProvider from './hocs/WithThemeProvider';

function App() {
  return (
    <WithThemeProvider>
      <Routes />
    </WithThemeProvider>
  );
}

export default App;
