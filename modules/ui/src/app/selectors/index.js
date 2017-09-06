/**
 * Gets todos
 * @param {Object} state - Redux state
 * @returns {Object[]} array of todos
 */
export const getTodos =
    state => state.todos.allIds.map(_id => state.todos.byId[_id]).filter(todo => !!todo);

/**
 * Returns todo matching specified id
 * @param {Object} state - Redux state
 * @param {string} _id - id of requested todo
 * @returns {Object} todo
 */
export const getTodoById = (state, _id) => state.todos.byId[_id];

/**
 * Returns current user
 * @param {Object} state - Redux state
 * @returns {Object} user
 */
export const getUser = state => state.auth.user;

/**
 * Returns current JWT
 * @param {Object} state - Redux state
 * @returns {string} token
 */
export const getToken = state => state.auth.token;

/**
 * Returns pending status of specified action type
 * @param {Object} state - Redux state
 * @param {string} actionType - action type
 * @returns {boolean} boolean indicating pending status of action
 */
export const isActionPending = (state, actionType) => !!state.async.pending[actionType];

/**
 * Returns error status of specified action type
 * @param {Object} state - Redux state
 * @param {string} actionType - action type
 * @returns {boolean} boolean indicating error status of action
 */
export const isActionRejected = (state, actionType) => !!state.async.error[actionType];

/**
 * Returns fulfilled status of specified action type
 * @param {Object} state - Redux state
 * @param {string} actionType - action type
 * @returns {boolean} boolean indicating fulfilled status of action
 */
export const isActionFulfilled = (state, actionType) => !!state.async.fulfilled[actionType];
