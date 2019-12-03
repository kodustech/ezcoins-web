import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import WithAuthRoute from './WithAuthRoute';
import Header from '../components/Header';

import Donate from '../pages/Donate';
import History from '../pages/History';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';
import WithAuth from '../hocs/WithAuth';

const Routes = memo(() => {
  return (
    <BrowserRouter>
      <div>
        <WithAuth>
          <Header />
        </WithAuth>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                to={{
                  pathname: 'login',
                }}
              />
            )}
          />
          <WithAuthRoute notAuthenticated path="/login">
            <Login />
          </WithAuthRoute>
          <WithAuthRoute path="/home">
            <div>Logged</div>
          </WithAuthRoute>
          <WithAuthRoute path="/history">
            <History />
          </WithAuthRoute>
          <WithAuthRoute path="/donate">
            <Donate />
          </WithAuthRoute>
          <WithAuthRoute path="/register-user">
            <RegisterUser />
          </WithAuthRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default Routes;
