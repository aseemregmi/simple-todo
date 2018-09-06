import { DELETE_TODO, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';

export default (auth, id) => {
  return async dispatch => {
    await axios.delete(
      `${HEROKU_URL}/todos/${id}`,

      {
        headers: {
          'X-Auth': auth
        }
      }
    );

    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  };
};
