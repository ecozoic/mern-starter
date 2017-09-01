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

/**
 * Creates an action to indicate todo addition process is pending
 * @param {string } text - text describing todo being added
 */
export const addTodoPending = text => ({
  type: ActionTypes.ADD_TODO_PENDING,
  meta: {
    text,
  },
});

/**
 * Creates an action to indicate todo addition process succeeded
 * @param {Object} todo - normalized todo
 */
export const addTodoFulfilled = todo => ({
  type: ActionTypes.ADD_TODO_FULFILLED,
  payload: todo,
});

/**
 * Creates an action to indicate todo addition process failed
 * @param {Error} error - error describing failure
 * @param {string} text - text describing todo that failed to add
 */
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

/**
 * Creates an action to indicate todo toggle process is pending
 * @param {string} _id - id of todo being toggled
 */
export const toggleTodoPending = _id => ({
  type: ActionTypes.TOGGLE_TODO_PENDING,
  meta: {
    _id,
  },
});

/**
 * Creates an action to indicate todo toggle process succeeded
 * @param {Object} todo - normalized todo
 */
export const toggleTodoFulfilled = todo => ({
  type: ActionTypes.TOGGLE_TODO_FULFILLED,
  payload: todo,
});

/**
 * Creates an action to indicate todo toggle process failed
 * @param {Error} error - error describing failure
 * @param {string} _id - id of todo that failed to toggle
 */
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

/**
 * Creates an action to indicate todo retrieval is pending
 */
export const fetchTodosPending = () => ({
  type: ActionTypes.FETCH_TODOS_PENDING,
});

/**
 * Creates an action to indicate todo retrieval was successful
 * @param {Object} todos - normalized todos
 */
export const fetchTodosFulfilled = todos => ({
  type: ActionTypes.FETCH_TODOS_FULFILLED,
  payload: todos,
});

/**
 * Creates an action to indicate todo retrieval failed
 * @param {Error} error - error describing failure
 */
export const fetchTodosRejected = error => ({
  type: ActionTypes.FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
