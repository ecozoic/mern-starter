import deepFreeze from 'deep-freeze';

import { asyncReducer, INITIAL_STATE } from './async';

describe('asyncReducer', () => {
  it('returns initial state', () => {
    const action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = asyncReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = asyncReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
