import { GET_TODOS } from './types';
import axios from 'axios';

export default token => {
  return async dispatch => {
    const res = await axios.get('http://localhost:3000/todos', {
      withCredentials: true,
      headers: { 'X-Auth': token }
    });

    dispatch({
      type: GET_TODOS,
      payload: res.data.todos
    });
  };
};
