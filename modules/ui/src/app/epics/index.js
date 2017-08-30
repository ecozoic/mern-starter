import { combineEpics } from 'redux-observable';

import { fetchTodosEpic } from './todos';

/**
 * Application root epic
 * @const
 */
const rootEpic = combineEpics(
  fetchTodosEpic,
);

export default rootEpic;
