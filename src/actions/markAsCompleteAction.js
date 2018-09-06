import { MARK_AS_COMPLETE } from './types';
import axios from 'axios';

export default (auth, id) => {
  return async dispatch => {
    const res = await axios.patch(
      `https://protected-thicket-67134.herokuapp.com/todos/${id}`,
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
