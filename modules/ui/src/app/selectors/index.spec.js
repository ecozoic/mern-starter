import { getTodos } from './';

describe('getTodos', () => {
  it('returns todos from state', () => {
    const state = {
      todos: {
        byId: {
          1: { id: '1', text: 'Todo', completed: false },
          2: { id: '2', text: 'Todo', completed: false },
          3: { id: '3', text: 'Todo', completed: false },
        },
        allIds: ['1', '2', '3'],
      },
    };


    expect(getTodos(state)).toEqual(state.todos.allIds.map(id => state.todos.byId[id]));
  });
});
