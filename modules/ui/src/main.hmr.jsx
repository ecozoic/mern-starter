import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';

import { AppContainer } from 'react-hot-loader';
import { createLogger } from 'redux-logger';

import App from './app';
import { configureStore, history, epicMiddleware } from './app/store';
import rootReducer from './app/reducers';
import rootEpic from './app/epics';
import DevTools from './app/containers/DevTools';

import './main.scss';

const store = configureStore(
  [
    createLogger(),
  ],
  [
    DevTools.instrument(),
  ],
);

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <App history={history} />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });

  module.hot.accept('./app/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });

  module.hot.accept('./app/epics', () => {
    epicMiddleware.replaceEpic(rootEpic);
  });
}
