import { isFSA } from 'flux-standard-action';
import _ from 'lodash';

import { ActionTypes } from '../constants';

import {
  login,
  loginPending,
  loginFulfilled,
  loginRejected,
  register,
  registerPending,
  registerFulfilled,
  registerRejected,
  logout,
  tokenRemoved,
  authenticate,
  authenticatePending,
  authenticateFulfilled,
  authenticateRejected,
} from './auth';

describe('login', () => {
  it('creates a valid action', () => {
    const username = 'user';
    const password = 'iliketurtles';
    const action = login(username, password, _.identity, _.identity);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.LOGIN);
    expect(action.payload.username).toEqual(username);
    expect(action.payload.password).toEqual(password);
    expect(action.payload.resolve).toBe(_.identity);
    expect(action.payload.reject).toBe(_.identity);
  });
});

describe('loginPending', () => {
  it('creates a valid action', () => {
    const username = 'user';
    const action = loginPending(username);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.LOGIN_PENDING);
    expect(action.meta.username).toEqual(username);
  });
});

describe('loginFulfilled', () => {
  it('creates a valid action', () => {
    const user = {};
    const token = 'token';
    const action = loginFulfilled(user, token);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.LOGIN_FULFILLED);
    expect(action.payload.user).toBe(user);
    expect(action.payload.token).toEqual(token);
  });
});

describe('loginRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const username = 'username';
    const action = loginRejected(error, username);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.LOGIN_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.meta.username).toEqual(username);
    expect(action.error).toEqual(true);
  });
});

describe('register', () => {
  it('creates a valid action', () => {
    const username = 'user';
    const password = 'iliketurtles';
    const action = register(username, password, _.identity, _.identity);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.REGISTER);
    expect(action.payload.username).toEqual(username);
    expect(action.payload.password).toEqual(password);
    expect(action.payload.resolve).toBe(_.identity);
    expect(action.payload.reject).toBe(_.identity);
  });
});

describe('registerPending', () => {
  it('creates a valid action', () => {
    const username = 'user';
    const action = registerPending(username);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.REGISTER_PENDING);
    expect(action.meta.username).toEqual(username);
  });
});

describe('registerFulfilled', () => {
  it('creates a valid action', () => {
    const user = {};
    const token = 'token';
    const action = registerFulfilled(user, token);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.REGISTER_FULFILLED);
    expect(action.payload.user).toBe(user);
    expect(action.payload.token).toEqual(token);
  });
});

describe('registerRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const username = 'username';
    const action = registerRejected(error, username);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.REGISTER_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.meta.username).toEqual(username);
    expect(action.error).toEqual(true);
  });
});

describe('logout', () => {
  it('creates a valid action', () => {
    const action = logout();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.LOGOUT);
  });
});

describe('tokenRemoved', () => {
  it('creates a valid action', () => {
    const action = tokenRemoved();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOKEN_REMOVED);
  });
});

describe('authenticate', () => {
  it('creates a valid action', () => {
    const token = 'token';
    const action = authenticate(token);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.AUTHENTICATE);
    expect(action.payload.token).toEqual(token);
  });
});

describe('authenticatePending', () => {
  it('creates a valid action', () => {
    const action = authenticatePending();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.AUTHENTICATE_PENDING);
  });
});

describe('authenticateFulfilled', () => {
  it('creates a valid action', () => {
    const user = {};
    const token = 'token';
    const action = authenticateFulfilled(user, token);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.AUTHENTICATE_FULFILLED);
    expect(action.payload.user).toBe(user);
    expect(action.payload.token).toEqual(token);
  });
});

describe('authenticateRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const action = authenticateRejected(error);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.AUTHENTICATE_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.error).toEqual(true);
  });
});
