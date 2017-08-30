import { Observable } from 'rxjs/Observable';

import { fetchTodosFulfilled, fetchTodosPending, fetchTodosRejected } from '../actions';
import { getTodos } from '../api';
import { ActionTypes } from '../constants';

/**
 * Epic to handle asynchronous Todo retrieval
 * @param action$ - stream of Redux actions
 * @param {Object} store - Redux store
 * @returns stream of Redux actions
 */
export const fetchTodosEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );
