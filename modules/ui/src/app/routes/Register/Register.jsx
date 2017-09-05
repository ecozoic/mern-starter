import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import RegisterForm from '../../containers/RegisterForm';

const Register = () => (
  <div>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <RegisterForm />
  </div>
);

Register.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Register;
