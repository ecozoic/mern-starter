import { combineEpics } from 'redux-observable';

import { fetchTodosEpic, addTodoEpic, toggleTodoEpic, deleteTodoEpic } from './todos';
import { loginEpic, registerEpic } from './auth';

const rootEpic = combineEpics(
  fetchTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
  deleteTodoEpic,
  loginEpic,
  registerEpic,
);

export default rootEpic;
