import { Observable } from 'rxjs/Observable';

import {
  fetchTodosFulfilled,
  fetchTodosPending,
  fetchTodosRejected,
  addTodoFulfilled,
  addTodoPending,
  addTodoRejected,
  toggleTodoFulfilled,
  toggleTodoPending,
  toggleTodoRejected,
} from '../actions';
import { getTodos, addTodo, toggleTodo } from '../api';
import { ActionTypes } from '../constants';
import { getTodoById } from '../selectors';

export const fetchTodosEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .mergeMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );

export const addTodoEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.ADD_TODO)
    .do(action => store.dispatch(addTodoPending(action.payload.text)))
    .mergeMap(action =>
      addTodo(action.payload.text)
        .map(todo => addTodoFulfilled(todo))
        .catch(error => Observable.of(addTodoRejected(error, action.payload.text))),
    );

export const toggleTodoEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.TOGGLE_TODO)
    .do(action => store.dispatch(toggleTodoPending(action.payload.id)))
    .mergeMap(action =>
      toggleTodo(getTodoById(store.getState(), action.payload.id))
        .map(todo => toggleTodoFulfilled(todo))
        .catch(error => Observable.of(toggleTodoRejected(error, action.payload.id))),
    );
