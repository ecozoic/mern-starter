import { ActionTypes } from '../constants';

export const INITIAL_STATE = {
  user: null,
  token: null,
};

export const authReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_FULFILLED:
    case ActionTypes.REGISTER_FULFILLED:
    case ActionTypes.AUTHENTICATE_FULFILLED:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      };
    case ActionTypes.LOGOUT:
      return {
        ...prevState,
        user: null,
        token: null,
      };
    default:
      return prevState;
  }
};
