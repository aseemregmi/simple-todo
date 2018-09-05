import { POST_TODO } from './types';
import axios from 'axios';

export default (text, auth) => {
  return async dispatch => {
    const res = await axios.post(
      'http://localhost:3000/todos',
      { text },
      {
        headers: {
          'X-Auth': auth
        }
      }
    );

    dispatch({
      type: POST_TODO,
      payload: res.data
    });
  };
};
