import { isFSA } from 'flux-standard-action';

import { ActionTypes } from '../constants';

import {
  addTodo,
  toggleTodo,
  fetchTodos,
  fetchTodosPending,
  fetchTodosFulfilled,
  fetchTodosRejected,
} from './';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const text = 'Todo';
    const action = addTodo(text);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.ADD_TODO);
    expect(action.payload.text).toEqual(text);
    expect(action.payload.id).toEqual(expect.any(String));
    expect(action.payload.completed).toEqual(false);
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const id = '1';
    const action = toggleTodo(id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOGGLE_TODO);
    expect(action.payload.id).toEqual(id);
  });
});

describe('fetchTodos', () => {
  it('creates a valid action', () => {
    const action = fetchTodos();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.FETCH_TODOS);
  });
});

describe('fetchTodosPending', () => {
  it('creates a valid action', () => {
    const action = fetchTodosPending();

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.FETCH_TODOS_PENDING);
  });
});

describe('fetchTodosFulfilled', () => {
  it('creates a valid action', () => {
    const todos = {
      entities: {
        todos: {
          1: { id: '1', text: 'Todo', completed: false },
        },
      },
      result: ['1'],
    };

    const action = fetchTodosFulfilled(todos);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.FETCH_TODOS_FULFILLED);
    expect(action.payload).toEqual(todos);
  });
});

describe('fetchTodosRejected', () => {
  it('creates a valid action', () => {
    const error = new Error('error');
    const action = fetchTodosRejected(error);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.FETCH_TODOS_REJECTED);
    expect(action.payload).toEqual(error);
    expect(action.error).toEqual(true);
  });
});
