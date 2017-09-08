import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Paths } from '../constants';
import Authenticate from '../containers/Authenticate';
import AuthRoute from '../containers/AuthRoute';
import GuestRoute from '../containers/GuestRoute';

import Home from './Home';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';

const routes = (
  <Authenticate>
    <Switch>
      <Route exact path={Paths.HOME} component={Home} />
      <GuestRoute path={Paths.LOGIN} component={Login} />
      <GuestRoute path={Paths.REGISTER} component={Register} />
      <AuthRoute path={Paths.ADMIN} component={Admin} />
      <Route component={PageNotFound} />
    </Switch>
  </Authenticate>
);

export default routes;
