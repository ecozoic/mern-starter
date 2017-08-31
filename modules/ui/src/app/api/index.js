import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';

import { todoSchema, todoListSchema } from '../models';

const TODOS_RESOURCE = '/api/todos';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Fetches Todos from API
 * @returns Observable of normalized todos
 */
export const getTodos = () => Observable.ajax({
  url: TODOS_RESOURCE,
  method: 'GET',
  responseType: 'json',
  headers,
}).map(ajaxResponse => normalize(ajaxResponse.response, todoListSchema));

/**
 * Posts a new todo to the API
 * @param {string} text - text describing todo to add
 * @returns Observable of normalized todo that was added
 */
export const addTodo = text => Observable.ajax({
  url: TODOS_RESOURCE,
  method: 'POST',
  responseType: 'json',
  headers,
  body: {
    text,
    completed: false,
  },
}).map(ajaxResponse => normalize(ajaxResponse.response, todoSchema));

/**
 * Patches an existing todo to the API in order to toggle completion status
 * @param {Object} todo - todo to toggle
 * @returns Observable of normalized todo that was toggled
 */
export const toggleTodo = ({ id, completed }) => Observable.ajax({
  url: `${TODOS_RESOURCE}/${id}`,
  method: 'PATCH',
  responseType: 'json',
  headers,
  body: {
    completed: !completed,
  },
}).map(ajaxResponse => normalize(ajaxResponse.response, todoSchema));
