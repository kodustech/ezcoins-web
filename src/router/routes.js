import React, { memo } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

const Routes = memo(() => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

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
