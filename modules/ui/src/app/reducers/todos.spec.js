import deepFreeze from 'deep-freeze';

import { todosReducer, INITIAL_STATE } from './todos';

describe('authReducer', () => {
  it('returns initial state', () => {
    const action = {
      type: '@@INIT',
    };

    deepFreeze(action);

    const nextState = todosReducer(undefined, action);

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('returns existing state for unknown action', () => {
    const action = {
      type: '@@UNKNOWN',
    };

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = todosReducer(prevState, action);

    expect(nextState).toBe(prevState);
  });
});
