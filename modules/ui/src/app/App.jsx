import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { ConnectedRouter } from 'connected-react-router';

import Header from './containers/Header';

import routes from './routes';

/**
 * Main application component
 * @param {Object} props - component props
 * @param {Object} props.history - history object
 */
const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Header />
      {routes}
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default App;
