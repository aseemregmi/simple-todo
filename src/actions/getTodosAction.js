import { GET_TODOS, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';

export default token => {
  return async dispatch => {
    const res = await axios.get(`${HEROKU_URL}/todos`, {
      withCredentials: true,
      headers: { 'X-Auth': token }
    });

    dispatch({
      type: GET_TODOS,
      payload: res.data.todos
    });
  };
};
