import { GET_TODOS, POST_TODO } from '../actions/types.js';
console.log(GET_TODOS);
const initialState = {
  todos: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: action.payload
      };
    case POST_TODO:
      return {
        todos: [state.todos, ...action.payload]
      };
    default:
      return { ...state };
  }
}
