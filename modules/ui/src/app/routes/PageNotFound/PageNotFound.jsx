import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Redirect } from 'react-router-dom';

import { Paths } from '../../constants';

const PageNotFound = () => (
  <Redirect to={Paths.HOME} />
);

PageNotFound.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default PageNotFound;
