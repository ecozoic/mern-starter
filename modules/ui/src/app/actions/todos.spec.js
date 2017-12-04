import { isFSA } from 'flux-standard-action';

import { ActionTypes } from '../constants';

import {
  addTodo,
  addTodoPending,
  addTodoFulfilled,
  addTodoRejected,
  toggleTodo,
  toggleTodoPending,
  toggleTodoFulfilled,
  toggleTodoRejected,
  fetchTodos,
  fetchTodosPending,
  fetchTodosFulfilled,
  fetchTodosRejected,
  deleteTodo,
  deleteTodoPending,
  deleteTodoFulfilled,
  deleteTodoRejected,
} from './todos';

describe('addTodo', () => {
  it('creates a valid action', () => {
    const text = 'Todo';
    const action = addTodo(text);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.ADD_TODO);
    expect(action.payload.text).toEqual(text);
  });
});

describe('addTodoPending', () => {
  it('creates a valid action', () => {
    const text = 'Todo';
    const action = addTodoPending(text);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.ADD_TODO_PENDING);
    expect(action.meta.text).toEqual(text);
  });
});

describe('addTodoFulfilled', () => {
  it('creates a valid action', () => {
    const todo = {};
    const action = addTodoFulfilled(todo);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.ADD_TODO_FULFILLED);
    expect(action.payload).toBe(todo);
  });
});

describe('addTodoRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const text = 'Todo';
    const action = addTodoRejected(error, text);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.ADD_TODO_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.meta.text).toEqual(text);
    expect(action.error).toBe(true);
  });
});

describe('toggleTodo', () => {
  it('creates a valid action', () => {
    const _id = '1';
    const action = toggleTodo(_id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOGGLE_TODO);
    expect(action.payload._id).toEqual(_id);
  });
});

describe('toggleTodoPending', () => {
  it('creates a valid action', () => {
    const _id = '1';
    const action = toggleTodoPending(_id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOGGLE_TODO_PENDING);
    expect(action.meta._id).toEqual(_id);
  });
});

describe('toggleTodoFulfilled', () => {
  it('creates a valid action', () => {
    const todo = {};
    const action = toggleTodoFulfilled(todo);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOGGLE_TODO_FULFILLED);
    expect(action.payload).toBe(todo);
  });
});

describe('toggleTodoRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const _id = '1';
    const action = toggleTodoRejected(error, _id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.TOGGLE_TODO_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.meta._id).toEqual(_id);
    expect(action.error).toBe(true);
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

describe('deleteTodo', () => {
  it('creates a valid action', () => {
    const _id = '1';
    const action = deleteTodo(_id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.DELETE_TODO);
    expect(action.payload._id).toEqual(_id);
  });
});

describe('deleteTodoPending', () => {
  it('creates a valid action', () => {
    const _id = '1';
    const action = deleteTodoPending(_id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.DELETE_TODO_PENDING);
    expect(action.meta._id).toEqual(_id);
  });
});

describe('deleteTodoFulfilled', () => {
  it('creates a valid action', () => {
    const _id = '1';
    const action = deleteTodoFulfilled(_id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.DELETE_TODO_FULFILLED);
    expect(action.meta._id).toEqual(_id);
  });
});

describe('deleteTodoRejected', () => {
  it('creates a valid action', () => {
    const error = new Error();
    const _id = '1';
    const action = deleteTodoRejected(error, _id);

    expect(isFSA(action)).toEqual(true);
    expect(action.type).toEqual(ActionTypes.DELETE_TODO_REJECTED);
    expect(action.payload).toBe(error);
    expect(action.meta._id).toEqual(_id);
    expect(action.error).toBe(true);
  });
});
