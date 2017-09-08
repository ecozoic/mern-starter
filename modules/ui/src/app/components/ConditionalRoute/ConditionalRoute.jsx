import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ConditionalRoute = ({ condition, redirectTo, ...props }) => (
  condition ? (
    <Route {...props} />
  ) : (
    <Redirect to={redirectTo} />
  )
);

ConditionalRoute.propTypes = {
  condition: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default ConditionalRoute;
