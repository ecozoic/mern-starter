import { combineReducers } from 'redux';

import { todosReducer as todos } from './todos';
import { authReducer as auth } from './auth';
import { asyncReducer as async } from './async';

const rootReducer = combineReducers({
  todos,
  auth,
  async,
});

export const INITIAL_STATE = {};

export default rootReducer;
