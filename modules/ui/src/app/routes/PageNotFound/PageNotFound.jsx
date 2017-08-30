import React from 'react';
import Helmet from 'react-helmet';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './PageNotFound.scss';

/**
 * 404 component
 */
const PageNotFound = () => (
  <div>
    <Helmet>
      <title>404</title>
    </Helmet>
    <h1 className={styles.header}>404</h1>
  </div>
);

PageNotFound.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default PageNotFound;
