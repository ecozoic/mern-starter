import { Observable } from 'rxjs/Observable';
import { normalize } from 'normalizr';

import { todoSchema, todoListSchema } from '../models';

const Resources = {
  TODOS: '/api/todos',
  LOGIN: '/api/login',
  REGISTER: '/api/users',
};

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const ContentTypes = {
  APPLICATION_JSON: 'application/json',
};

const ResponseTypes = {
  JSON: 'json',
};

const HttpHeaders = {
  ACCEPT: 'Accept',
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
};

// default headers
const headers = {
  [HttpHeaders.ACCEPT]: ContentTypes.APPLICATION_JSON,
  [HttpHeaders.CONTENT_TYPE]: ContentTypes.APPLICATION_JSON,
};

/**
 * Fetches Todos from API
 * @returns Observable of normalized todos
 */
export const getTodos = () => Observable.ajax({
  url: Resources.TODOS,
  method: HttpMethods.GET,
  responseType: ResponseTypes.JSON,
  headers,
}).map(ajaxResponse => normalize(ajaxResponse.response, todoListSchema));

/**
 * Posts a new todo to the API
 * @param {string} text - text describing todo to add
 * @returns Observable of normalized todo that was added
 */
export const addTodo = text => Observable.ajax({
  url: Resources.TODOS,
  method: HttpMethods.POST,
  responseType: ResponseTypes.JSON,
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
export const toggleTodo = ({ _id, completed }) => Observable.ajax({
  url: `${Resources.TODOS}/${_id}`,
  method: HttpMethods.PATCH,
  responseType: ResponseTypes.JSON,
  headers,
  body: {
    completed: !completed,
  },
}).map(ajaxResponse => normalize(ajaxResponse.response, todoSchema));

/**
 * Delete an existing todo from the API. Requires valid JWT
 * @param {string} _id - id of todo to delete
 * @param {string} token - JWT
 */
export const deleteTodo = (_id, token) => Observable.ajax({
  url: `${Resources.TODOS}/${_id}`,
  method: HttpMethods.DELETE,
  responseType: ResponseTypes.JSON,
  headers: {
    ...headers,
    [HttpHeaders.AUTHORIZATION]: `Bearer ${token}`,
  },
});

/**
 * Login with existing user to retrieve JWT
 * @param {string} username - username
 * @param {string} password - password
 * @returns Observable of the user and JWT
 */
export const login = (username, password) => Observable.ajax({
  url: Resources.LOGIN,
  method: HttpMethods.POST,
  responseType: ResponseTypes.JSON,
  headers,
  body: {
    username,
    password,
  },
}).map(ajaxResponse => ajaxResponse.response);

/**
 * Register a new user and retrieve JWT
 * @param {string} username - username
 * @param {string} password - password
 * @returns Observable of the user and JWT
 */
export const register = (username, password) => Observable.ajax({
  url: Resources.REGISTER,
  method: HttpMethods.POST,
  responseType: ResponseTypes.JSON,
  headers,
  body: {
    username,
    password,
  },
}).map(ajaxResponse => ajaxResponse.response);
