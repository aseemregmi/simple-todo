import { MARK_AS_COMPLETE } from './types';
import axios from 'axios';

export default (auth, id) => {
  console.log(auth);
  console.log(id);
  return async dispatch => {
    const res = await axios.patch(
      `http://localhost:3000/todos/${id}`,
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
