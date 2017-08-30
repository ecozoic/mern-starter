import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';

import config from '../config';
import rootReducer, { INITIAL_STATE } from '../reducers';
import rootEpic from '../epics';

const history = createBrowserHistory({
  basename: config.basename,
});

const epicMiddleware = createEpicMiddleware(rootEpic);
const routerMiddleware = createRouterMiddleware(history);

const defaultMiddleware = [
  routerMiddleware,
  thunk,
  epicMiddleware,
];

/**
 * Creates a fully-configured Redux store
 * Default middleware: connected-react-router, redux-thunk, redux-observable
 * Default store enhancers: applyMiddleware
 * @param {Function[]} [middleware=[]] - array of middleware to be appended to defaults
 * @param {Function[]} [storeEnhancers=[]] - array of store enhancers to be appended to defaults
 * @returns {Object} Redux store
 */
const configureStore =
  (middleware = [], storeEnhancers = []) => createStore(
    connectRouter(history)(rootReducer),
    INITIAL_STATE,
    compose(
      applyMiddleware(
        ...defaultMiddleware,
        ...middleware,
      ),
      ...storeEnhancers,
    ),
  );

export { configureStore, history, epicMiddleware, routerMiddleware };
