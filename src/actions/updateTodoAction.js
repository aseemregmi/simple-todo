import { UPDATE_TODO, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';

export default (auth, body) => {
  return async dispatch => {
    const res = await axios.patch(
      `${HEROKU_URL}/todos/${body.id}`,
      { text: body.text, completed: body.completed },
      {
        headers: {
          'X-Auth': auth
        }
      }
    );

    dispatch({
      type: UPDATE_TODO,
      payload: res.data
    });
  };
};
