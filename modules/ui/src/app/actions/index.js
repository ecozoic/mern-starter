import _ from 'lodash';

import { ActionTypes } from '../constants';

/**
 * Creates an ADD_TODO action
 * @param {string} text - text describing todo to add
 * @returns {Object} ADD_TODO action
 */
export const addTodo = text => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: _.uniqueId(),
    text,
    completed: false,
  },
});

/**
 * Creates a TOGGLE_TODO action
 * @param {string} id - id of todo to toggle
 * @returns {Object} TOGGLE_TODO action
 */
export const toggleTodo = id => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: {
    id,
  },
});

/**
 * Creates a FETCH_TODOS action
 * @returns {Object} FETCH_TODOS action
 */
export const fetchTodos = () => ({
  type: ActionTypes.FETCH_TODOS,
});

/**
 * Creates a FETCH_TODOS_PENDING action
 * @returns {Object} FETCH_TODOS_PENDING action
 */
export const fetchTodosPending = () => ({
  type: ActionTypes.FETCH_TODOS_PENDING,
});

/**
 * Creates a FETCH_TODOS_FULFILLED action
 * @param {Object} todos - normalized todos
 * @returns {Object} FETCH_TODOS_FULFILLED action
 */
export const fetchTodosFulfilled = todos => ({
  type: ActionTypes.FETCH_TODOS_FULFILLED,
  payload: todos,
});

/**
 * Creates a FETCH_TODOS_REJECTED action
 * @param {Error} error - error describing reason for rejection
 * @returns {Object} FETCH_TODOS_REJECTED action
 */
export const fetchTodosRejected = error => ({
  type: ActionTypes.FETCH_TODOS_REJECTED,
  payload: error,
  error: true,
});
