import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import { Container } from 'semantic-ui-react';

import RegisterForm from '../../containers/RegisterForm';

import styles from './Register.scss';

const Register = () => (
  <div className={styles.register}>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <Container className={styles.container}>
      <RegisterForm />
    </Container>
  </div>
);

Register.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Register;
