import { Observable } from 'rxjs/Observable';

import {
  loginPending,
  loginFulfilled,
  loginRejected,
  registerPending,
  registerFulfilled,
  registerRejected,
  tokenRemoved,
  authenticatePending,
  authenticateFulfilled,
  authenticateRejected,
} from '../actions';
import { login, register, authenticate } from '../api';
import { ActionTypes } from '../constants';

const jwtStorageKey = process.env.JWT_STORAGE_KEY;

// TODO: set local storage as epic dep for testability
// TODO: use switchmap

export const loginEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.LOGIN)
    .do(action => store.dispatch(loginPending(action.payload.username)))
    .mergeMap(action =>
      login(action.payload.username, action.payload.password)
        .map(userInfo => loginFulfilled(userInfo.user, userInfo.token))
        .do((loginAction) => {
          action.payload.resolve();

          localStorage.setItem(jwtStorageKey, loginAction.payload.token);
        })
        .catch((error) => {
          action.payload.reject();

          return Observable.of(loginRejected(error, action.payload.username));
        }),
    );

export const registerEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.REGISTER)
    .do(action => store.dispatch(registerPending(action.payload.username)))
    .mergeMap(action =>
      register(action.payload.username, action.payload.password)
        .map(userInfo => registerFulfilled(userInfo.user, userInfo.token))
        .do((registerAction) => {
          action.payload.resolve();

          localStorage.setItem(jwtStorageKey, registerAction.payload.token);
        })
        .catch((error) => {
          action.payload.reject();

          return Observable.of(registerRejected(error, action.payload.username));
        }),
    );

// TODO: ignoreElements
export const logoutEpic = action$ =>
  action$
    .ofType(ActionTypes.LOGOUT)
    .do(() =>
      localStorage.removeItem(jwtStorageKey),
    )
    .map(() => tokenRemoved());

export const authenticateEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.AUTHENTICATE)
    .do(() => store.dispatch(authenticatePending()))
    .mergeMap(action =>
      authenticate(action.payload.token)
        .map(userInfo => authenticateFulfilled(userInfo.user, userInfo.token))
        .do(authenticateAction =>
          localStorage.setItem(jwtStorageKey, authenticateAction.payload.token),
        )
        .catch((error) => {
          localStorage.removeItem(jwtStorageKey);

          return Observable.of(authenticateRejected(error));
        }),
    );
