import { ActionTypes } from '../constants';

export const INITIAL_STATE = {
  user: null,
  token: null,
};

export const authReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_FULFILLED:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      };
    case ActionTypes.REGISTER_FULFILLED:
      return {
        ...prevState,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return prevState;
  }
};
