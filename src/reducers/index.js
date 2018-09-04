import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

export default combineReducers({
  todos: todosReducer,
  todo: todoReducer,
  currentUser: userReducer
});
