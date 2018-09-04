import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk];

const user = JSON.parse(localStorage.getItem('user')) || {};
const initialState = { currentUser: { user } };

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
