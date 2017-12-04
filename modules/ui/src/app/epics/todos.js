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
  deleteTodoFulfilled,
  deleteTodoPending,
  deleteTodoRejected,
} from '../actions';
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../api';
import { ActionTypes } from '../constants';
import { getTodoById, getToken } from '../selectors';

export const fetchTodosEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.FETCH_TODOS)
    .do(() => store.dispatch(fetchTodosPending()))
    .switchMap(() =>
      getTodos()
        .map(todos => fetchTodosFulfilled(todos))
        .catch(error => Observable.of(fetchTodosRejected(error))),
    );

export const addTodoEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.ADD_TODO)
    .do(action => store.dispatch(addTodoPending(action.payload.text)))
    .switchMap(action =>
      addTodo(action.payload.text)
        .map(todo => addTodoFulfilled(todo))
        .catch(error => Observable.of(addTodoRejected(error, action.payload.text))),
    );

export const toggleTodoEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.TOGGLE_TODO)
    .do(action => store.dispatch(toggleTodoPending(action.payload._id)))
    .switchMap(action =>
      toggleTodo(getTodoById(store.getState(), action.payload._id))
        .map(todo => toggleTodoFulfilled(todo))
        .catch(error => Observable.of(toggleTodoRejected(error, action.payload._id))),
    );

export const deleteTodoEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.DELETE_TODO)
    .do(action => store.dispatch(deleteTodoPending(action.payload._id)))
    .switchMap(action =>
      deleteTodo(action.payload._id, getToken(store.getState()))
        .map(() => deleteTodoFulfilled(action.payload._id))
        .catch(error => Observable.of(deleteTodoRejected(error, action.payload._id))),
    );
