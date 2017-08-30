import { combineReducers } from 'redux';

import { todosReducer as todos } from './todos';

/**
 * Application root reducer
 * @type {Function}
 * @const
 */
const rootReducer = combineReducers({
  todos,
});

/**
 * Application intial state
 * @const
 * @type {Object}
 * @default
 */
export const INITIAL_STATE = {};

export default rootReducer;
