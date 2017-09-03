import deepFreeze from 'deep-freeze';

import { authReducer, INITIAL_STATE } from './auth';

describe('authReducer', () => {
  it('returns initial state', () => {
    const action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = authReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = authReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
