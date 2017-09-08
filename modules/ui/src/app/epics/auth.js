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
import config from '../config';
import { ActionTypes } from '../constants';

export const loginEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.LOGIN)
    .do(action => store.dispatch(loginPending(action.payload.username)))
    .mergeMap(action =>
      login(action.payload.username, action.payload.password)
        .map(userInfo => loginFulfilled(userInfo.user, userInfo.token))
        .do((loginAction) => {
          action.payload.resolve();

          window.localStorage.setItem(config.jwtStorageKey, loginAction.payload.token);
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

          window.localStorage.setItem(config.jwtStorageKey, registerAction.payload.token);
        })
        .catch((error) => {
          action.payload.reject();

          return Observable.of(registerRejected(error, action.payload.username));
        }),
    );

export const logoutEpic = action$ =>
  action$
    .ofType(ActionTypes.LOGOUT)
    .do(() =>
      window.localStorage.removeItem(config.jwtStorageKey),
    )
    .map(() => tokenRemoved())
  ;

export const authenticateEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.AUTHENTICATE)
    .do(() => store.dispatch(authenticatePending()))
    .mergeMap(action =>
      authenticate(action.payload.token)
        .map(userInfo => authenticateFulfilled(userInfo.user, userInfo.token))
        .do(authenticateAction =>
          window.localStorage.setItem(config.jwtStorageKey, authenticateAction.payload.token),
        )
        .catch((error) => {
          window.localStorage.removeItem(config.jwtStorageKey);

          return Observable.of(authenticateRejected(error));
        }),
    );
