import { AsyncSuffixes } from '../constants';
import { trimSuffix } from '../lib';

export const INITIAL_STATE = {
  pending: {},
  fulfilled: {},
  error: {},
};

export const asyncReducer = (prevState = INITIAL_STATE, action) => {
  if (action.type.endsWith(AsyncSuffixes.PENDING)) {
    const key = trimSuffix(action.type, AsyncSuffixes.PENDING);

    return {
      ...prevState,
      pending: {
        ...prevState.pending,
        [key]: true,
      },
      fulfilled: {
        ...prevState.fulfilled,
        [key]: false,
      },
      error: {
        ...prevState.error,
        [key]: false,
      },
    };
  } else if (action.type.endsWith(AsyncSuffixes.FULFILLED)) {
    const key = trimSuffix(action.type, AsyncSuffixes.FULFILLED);

    return {
      ...prevState,
      pending: {
        ...prevState.pending,
        [key]: false,
      },
      fulfilled: {
        ...prevState.fulfilled,
        [key]: true,
      },
      error: {
        ...prevState.error,
        [key]: false,
      },
    };
  } else if (action.type.endsWith(AsyncSuffixes.REJECTED)) {
    const key = trimSuffix(action.type, AsyncSuffixes.REJECTED);

    return {
      ...prevState,
      pending: {
        ...prevState.pending,
        [key]: false,
      },
      fulfilled: {
        ...prevState.fulfilled,
        [key]: false,
      },
      error: {
        ...prevState.error,
        [key]: true,
      },
    };
  }

  return prevState;
};
