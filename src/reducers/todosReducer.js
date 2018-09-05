import { GET_TODOS, POST_TODO, MARK_AS_COMPLETE } from '../actions/types.js';
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
      let abc = state.todos;
      abc.push(action.payload);
      return {
        todos: abc
      };

    case MARK_AS_COMPLETE:
      const def = state.todos.map(todo => {
        if (todo._id == action.payload.todo._id) {
          console.log('matched');
          return action.payload.todo;
        } else {
          return todo;
        }
      });

      return {
        todos: def
      };

    default:
      return { ...state };
  }
}
