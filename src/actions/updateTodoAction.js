import { UPDATE_TODO } from './types';
import axios from 'axios';

export default (auth, body) => {
  return async dispatch => {
    const res = await axios.patch(
      `http://localhost:3000/todos/${body.id}`,
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
