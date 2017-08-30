/**
 * Gets todos
 * @param {Object} state - Redux state
 * @returns {Object[]} array of todos
 */
export const getTodos = state => state.todos.allIds.map(id => state.todos.byId[id]);
