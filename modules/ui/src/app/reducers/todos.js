import _ from 'lodash';

import { ActionTypes } from '../constants';

export const INITIAL_STATE = {
  byId: {},
  allIds: [],
};

export const todosReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
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
      };
    case ActionTypes.TOGGLE_TODO_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
      };
    case ActionTypes.FETCH_TODOS_FULFILLED:
      return {
        ...prevState,
        byId: {
          ...prevState.byId,
          ...action.payload.entities.todos,
        },
        allIds: _.uniq([
          ...prevState.allIds,
          ...action.payload.result,
        ]),
      };
    case ActionTypes.DELETE_TODO_FULFILLED:
      return {
        ...prevState,
        allIds: prevState.allIds.filter(_id => _id !== action.meta._id),
        byId: {
          ...prevState.byId,
          [action.meta._id]: undefined,
        },
      };
    default:
      return prevState;
  }
};
