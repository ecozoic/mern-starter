import deepFreeze from 'deep-freeze';

import { addTodo, toggleTodo, fetchTodosFulfilled } from '../actions';

import { todosReducer, INITIAL_STATE } from './todos';

describe('todosReducer', () => {
  it('adds a new todo', () => {
    const text1 = 'Todo 1';
    const text2 = 'Todo 2';

    const action1 = addTodo(text1);
    const action2 = addTodo(text2);

    const prevState = INITIAL_STATE;

    deepFreeze(action1);
    deepFreeze(action2);
    deepFreeze(prevState);

    let nextState = todosReducer(prevState, action1);
    expect(nextState.allIds.length).toEqual(1);
    expect(nextState.byId[action1.payload.id].text).toEqual(text1);

    deepFreeze(nextState);

    nextState = todosReducer(nextState, action2);
    expect(nextState.allIds.length).toEqual(2);
    expect(nextState.byId[action2.payload.id].text).toEqual(text2);
  });

  it('toggles an existing todo', () => {
    const id = '1';
    const action = toggleTodo(id);

    const prevState = {
      allIds: [id],
      byId: {
        [id]: { id, text: 'Todo', completed: false },
      },
    };

    deepFreeze(action);
    deepFreeze(prevState);

    let nextState = todosReducer(prevState, action);
    expect(nextState.byId[id].completed).toEqual(true);

    deepFreeze(nextState);

    nextState = todosReducer(nextState, action);
    expect(nextState.byId[id].completed).toEqual(false);
  });

  it('noops if requested todo to toggle not found', () => {
    const action = toggleTodo('100');

    const prevState = {
      allIds: ['1'],
      byId: {
        1: { id: '1', text: 'Todo', completed: false },
      },
    };

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = todosReducer(prevState, action);
    expect(nextState).toBe(prevState);
  });

  it('adds fetched todos to state', () => {
    const todos = {
      entities: {
        todos: {
          1: { id: '1', text: 'Todo', completed: false },
          2: { id: '2', text: 'Todo', completed: false },
          3: { id: '3', text: 'Todo', completed: false },
        },
      },
      result: ['1', '2', '3'],
    };

    const action = fetchTodosFulfilled(todos);

    const prevState = INITIAL_STATE;

    deepFreeze(action);
    deepFreeze(prevState);

    const nextState = todosReducer(prevState, action);
    expect(nextState.allIds).toEqual(todos.result);
    expect(nextState.byId).toEqual(todos.entities.todos);
  });

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
