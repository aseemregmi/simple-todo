import { USER_LOGIN, USER_SIGNUP } from '../actions/types';
const initialState = {
  user: {}
  // user: {
  //   'x-auth':
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNmUyZGU5YjY5OTAwMTRmOGY5OGQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTM1OTk2MTg5fQ.GIk-WljqMNcHMQ74auJwW2z_eu4G6JhAs0QeYxXMCsc',
  //   email: 'aseem.regmi22@gmail.com',
  //   _id: '5b8d6e2de9b6990014f8f98d'
  // }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        user: action.payload
      };
    case USER_SIGNUP:
      return {
        user: action.payload
      };
    default:
      return { ...state };
  }
}
