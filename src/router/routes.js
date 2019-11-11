import React, { memo } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Header from './Header';
import Login from '../pages/Login';
import WithAuthRoute from './WithAuthRoute';

const Routes = memo(() => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <WithAuthRoute path="/home">
            <div>Logged</div>
          </WithAuthRoute>
          <WithAuthRoute notAuthenticated path="/login">
            <Login />
          </WithAuthRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default Routes;
