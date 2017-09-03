import { Observable } from 'rxjs/Observable';

import {
  loginPending,
  loginFulfilled,
  loginRejected,
  registerPending,
  registerFulfilled,
  registerRejected,
} from '../actions';
import { login, register } from '../api';
import { ActionTypes } from '../constants';

export const loginEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.LOGIN)
    .do(action => store.dispatch(loginPending(action.payload.username)))
    .mergeMap(action =>
      login(action.payload.username, action.payload.password)
        .map(userInfo => loginFulfilled(userInfo.user, userInfo.token))
        .catch(error => Observable.of(loginRejected(error, action.payload.username))),
    );

export const registerEpic = (action$, store) =>
  action$
    .ofType(ActionTypes.REGISTER)
    .do(action => store.dispatch(registerPending(action.payload.username)))
    .mergeMap(action =>
      register(action.payload.username, action.payload.password)
        .map(userInfo => registerFulfilled(userInfo.user, userInfo.token))
        .catch(error => Observable.of(registerRejected(error, action.payload.username))),
    );
