import {
  GET_TODOS,
  POST_TODO,
  MARK_AS_COMPLETE,
  DELETE_TODO,
  UPDATE_TODO
} from '../actions/types.js';
const initialState = {
  todos: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case POST_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };

    case MARK_AS_COMPLETE:
      const def = state.todos.map(todo => {
        if (todo._id === action.payload.todo._id) {
          return action.payload.todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: def
      };
    case DELETE_TODO:
      const ghi = state.todos.filter(todo => {
        return todo._id !== action.payload;
      });
      return {
        ...state,
        todos: ghi
      };
    case UPDATE_TODO:
      const jkl = state.todos.map(todo => {
        if (todo._id === action.payload.todo._id) {
          return action.payload.todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: jkl
      };

    default:
      return { ...state };
  }
}
