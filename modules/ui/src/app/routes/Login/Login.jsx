import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Container } from 'semantic-ui-react';

import LoginForm from '../../containers/LoginForm';

import styles from './Login.scss';

const Login = () => (
  <div className={styles.login}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <Container className={styles.container}>
      <LoginForm />
    </Container>
  </div>
);

Login.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Login;
