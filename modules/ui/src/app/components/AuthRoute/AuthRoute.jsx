import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { Paths } from '../../constants';

const AuthRoute = ({ isAuthenticated, ...props }) => (
  isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to={Paths.LOGIN} />
  )
);

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default AuthRoute;
