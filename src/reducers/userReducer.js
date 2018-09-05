import { USER_LOGIN, USER_SIGNUP, USER_LOGOUT } from '../actions/types';
const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case USER_SIGNUP:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {}
      };
    default:
      return { ...state };
  }
}
