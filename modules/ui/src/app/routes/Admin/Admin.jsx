import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './Admin.scss';

const Admin = () => (
  <div className={styles.admin}>
    <Helmet>
      <title>Admin</title>
    </Helmet>
  </div>
);

Admin.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default Admin;
