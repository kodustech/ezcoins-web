import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home';

const Routes = memo(() => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
});

export default Routes;
