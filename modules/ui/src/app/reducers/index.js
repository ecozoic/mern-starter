import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { todosReducer as todos } from './todos';
import { authReducer as auth } from './auth';
import { asyncReducer as async } from './async';

const rootReducer = combineReducers({
  todos,
  auth,
  async,
  form,
});

export const INITIAL_STATE = {};

export default rootReducer;
