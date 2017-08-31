import { combineReducers } from 'redux';

import { todosReducer as todos } from './todos';

const rootReducer = combineReducers({
  todos,
});

export const INITIAL_STATE = {};

export default rootReducer;
