import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import PageNotFound from './PageNotFound';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={PageNotFound} />
  </Switch>
);

export default routes;
