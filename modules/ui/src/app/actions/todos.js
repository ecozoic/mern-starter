import { ActionTypes } from '../constants';

/**
 * Creates an action to add a new todo
 * @param {string} text - text describing todo to add
 */
export const addTodo = text => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    text,
  },
});

export const addTodoPending = text => ({
  type: ActionTypes.ADD_TODO_PENDING,
  meta: {
    text,
  },
});

export const addTodoFulfilled = todo => ({
  type: ActionTypes.ADD_TODO_FULFILLED,
  payload: todo,
});

export const addTodoRejected = (error, text) => ({
  type: ActionTypes.ADD_TODO_REJECTED,
  payload: error,
  error: true,
  meta: {
    text,
  },
});

/**
 * Creates an action to toggle completion status of a todo
 * @param {string} _id - id of todo to toggle
 */
export const toggleTodo = _id => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: {
    _id,
  },
});

export const toggleTodoPending = _id => ({
  type: ActionTypes.TOGGLE_TODO_PENDING,
  meta: {
    _id,
  },
});

export const toggleTodoFulfilled = todo => ({
  type: ActionTypes.TOGGLE_TODO_FULFILLED,
  payload: todo,
});

export const toggleTodoRejected = (error, _id) => ({
  type: ActionTypes.TOGGLE_TODO_REJECTED,
  payload: error,
  error: true,
  meta: {
    _id,
  },
});

/**
 * Creates an action to retrieve todos
 */
export const fetchTodos = () => ({
  type: ActionTypes.FETCH_TODOS,
});

export const fetchTodosPending = () => ({
  type: ActionTypes.FETCH_TODOS_PENDING,
});

export const fetchTodosFulfilled = todos => ({
  type: ActionTypes.FETCH_TODOS_FULFILLED,
  payload: todos,
});

export const fetchTodosRejected = error => ({
  type: ActionTypes.FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});

/**
 * Creates an action to delete a todo
 * @param {string} _id - id of todo to delete
 */
export const deleteTodo = _id => ({
  type: ActionTypes.DELETE_TODO,
  payload: {
    _id,
  },
});

export const deleteTodoPending = _id => ({
  type: ActionTypes.DELETE_TODO_PENDING,
  meta: {
    _id,
  },
});

export const deleteTodoFulfilled = _id => ({
  type: ActionTypes.DELETE_TODO_FULFILLED,
  meta: {
    _id,
  },
});

export const deleteTodoRejected = (error, _id) => ({
  type: ActionTypes.DELETE_TODO_REJECTED,
  payload: error,
  meta: {
    _id,
  },
  error: true,
});
