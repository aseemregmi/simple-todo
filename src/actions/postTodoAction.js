import { POST_TODO, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';

export default (text, auth) => {
  return async dispatch => {
    const res = await axios.post(
      `${HEROKU_URL}/todos`,
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
