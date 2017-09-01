/**
 * Gets todos
 * @param {Object} state - Redux state
 * @returns {Object[]} array of todos
 */
export const getTodos = state => state.todos.allIds.map(_id => state.todos.byId[_id]);

/**
 * Returns todo matching specified id
 * @param {Object} state - Redux state
 * @param {string} _id - id of requested todo
 * @returns {Object} todo
 */
export const getTodoById = (state, _id) => state.todos.byId[_id];
