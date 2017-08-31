import { ActionTypes } from '../constants';

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
  pending: {
    fetch: false,
    add: false,
    toggle: false,
  },
  error: {
    fetch: false,
    add: false,
    toggle: false,
  },
};

export const todosReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_PENDING:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          add: true,
        },
        error: {
          ...prevState.error,
          add: false,
        },
      };
    case ActionTypes.ADD_TODO_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
        allIds: [
          ...prevState.allIds,
          action.payload.result,
        ],
        pending: {
          ...prevState.pending,
          add: false,
        },
        error: {
          ...prevState.error,
          add: false,
        },
      };
    case ActionTypes.ADD_TODO_REJECTED:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          add: false,
        },
        error: {
          ...prevState.error,
          add: true,
        },
      };
    case ActionTypes.TOGGLE_TODO_PENDING:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          toggle: true,
        },
        error: {
          ...prevState.error,
          toggle: false,
        },
      };
    case ActionTypes.TOGGLE_TODO_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
        pending: {
          ...prevState.pending,
          toggle: false,
        },
        error: {
          ...prevState.error,
          toggle: false,
        },
      };
    case ActionTypes.TOGGLE_TODO_REJECTED:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          toggle: false,
        },
        error: {
          ...prevState.error,
          toggle: true,
        },
      };
    case ActionTypes.FETCH_TODOS_PENDING:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          fetch: true,
        },
        error: {
          ...prevState.error,
          fetch: false,
        },
      };
    case ActionTypes.FETCH_TODOS_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
        allIds: [
          ...prevState.allIds,
          ...action.payload.result,
        ],
        pending: {
          ...prevState.pending,
          fetch: false,
        },
        error: {
          ...prevState.error,
          fetch: false,
        },
      };
    case ActionTypes.FETCH_TODOS_REJECTED:
      return {
        ...prevState,
        pending: {
          ...prevState.pending,
          fetch: false,
        },
        error: {
          ...prevState.error,
          fetch: true,
        },
      };
    default:
      return prevState;
  }
};
