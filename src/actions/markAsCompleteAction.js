import { MARK_AS_COMPLETE, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';

export default (auth, id) => {
  return async dispatch => {
    const res = await axios.patch(
      `${HEROKU_URL}/todos/${id}`,
      { completed: true },
      {
        headers: {
          'X-Auth': auth
        }
      }
    );

    dispatch({
      type: MARK_AS_COMPLETE,
      payload: res.data
    });
  };
};
