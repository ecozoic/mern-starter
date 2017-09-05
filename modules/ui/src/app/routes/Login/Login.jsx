import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import LoginForm from '../../containers/LoginForm';

const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </div>
);

Login.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Login;
