import { ActionTypes } from '../constants';

/**
 * Creates an action to login with existing user
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  payload: {
    username,
    password,
  },
});

export const loginPending = username => ({
  type: ActionTypes.LOGIN_PENDING,
  meta: {
    username,
  },
});

export const loginFulfilled = (user, token) => ({
  type: ActionTypes.LOGIN_FULFILLED,
  payload: {
    user,
    token,
  },
});

export const loginRejected = (error, username) => ({
  type: ActionTypes.LOGIN_REJECTED,
  payload: error,
  meta: {
    username,
  },
  error: true,
});

/**
 * Creates an action to register a new user
 * @param {string} username
 * @param {string} password
 */
export const register = (username, password) => ({
  type: ActionTypes.REGISTER,
  payload: {
    username,
    password,
  },
});

export const registerPending = username => ({
  type: ActionTypes.REGISTER_PENDING,
  meta: {
    username,
  },
});

export const registerFulfilled = (user, token) => ({
  type: ActionTypes.REGISTER_FULFILLED,
  payload: {
    user,
    token,
  },
});

export const registerRejected = (error, username) => ({
  type: ActionTypes.REGISTER_REJECTED,
  payload: error,
  meta: {
    username,
  },
  error: true,
});
