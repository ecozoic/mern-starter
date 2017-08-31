import { combineEpics } from 'redux-observable';

import { fetchTodosEpic, addTodoEpic, toggleTodoEpic } from './todos';

const rootEpic = combineEpics(
  fetchTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
);

export default rootEpic;
