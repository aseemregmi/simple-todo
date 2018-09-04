import { GET_TODOS } from '../actions/types.js';
console.log(GET_TODOS);
const initialState = {
  todos: [
    // {
    //   completed: false,
    //   completedAt: null,
    //   _id: '5b8d6e7fe9b6990014f8f990',
    //   text: 'Eat somethingg',
    //   _creator: '5b8d6e2de9b6990014f8f98d',
    //   __v: 0
    // }
  ]
};

export default function(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: action.payload
      };
    default:
      return { ...state };
  }
}
