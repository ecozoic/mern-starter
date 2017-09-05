import { combineEpics } from 'redux-observable';

import { fetchTodosEpic, addTodoEpic, toggleTodoEpic, deleteTodoEpic } from './todos';
import { loginEpic, registerEpic, logoutEpic } from './auth';

const rootEpic = combineEpics(
  fetchTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
  deleteTodoEpic,
  loginEpic,
  registerEpic,
  logoutEpic,
);

export default rootEpic;
