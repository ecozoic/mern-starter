import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './Login.scss';

const Login = () => (
  <div className={styles.login}>
    <Helmet>
      <title>Login</title>
    </Helmet>
  </div>
);

Login.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Login;
