import { ActionTypes } from '../constants';

/**
 * Creates an action to login with existing user
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password, resolve, reject) => ({
  type: ActionTypes.LOGIN,
  payload: {
    username,
    password,
    resolve,
    reject,
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
export const register = (username, password, resolve, reject) => ({
  type: ActionTypes.REGISTER,
  payload: {
    username,
    password,
    resolve,
    reject,
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

/**
 * Creates an action to logout current user
 */
export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const tokenRemoved = () => ({
  type: ActionTypes.TOKEN_REMOVED,
});

/**
 * Creates an action to authenticate current user via JWT
 */
export const authenticate = token => ({
  type: ActionTypes.AUTHENTICATE,
  payload: {
    token,
  },
});

export const authenticatePending = () => ({
  type: ActionTypes.AUTHENTICATE_PENDING,
});

export const authenticateFulfilled = (user, token) => ({
  type: ActionTypes.AUTHENTICATE_FULFILLED,
  payload: {
    user,
    token,
  },
});

export const authenticateRejected = error => ({
  type: ActionTypes.AUTHENTICATE_REJECTED,
  payload: error,
  error: true,
});
