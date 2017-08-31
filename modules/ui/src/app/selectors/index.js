/**
 * Gets todos
 * @param {Object} state - Redux state
 * @returns {Object[]} array of todos
 */
export const getTodos = state => state.todos.allIds.map(id => state.todos.byId[id]);

/**
 * Returns todo matching specified id
 * @param {Object} state - Redux state
 * @param {string} id - id of requested todo
 * @returns {Object} todo
 */
export const getTodoById = (state, id) => state.todos.byId[id];
