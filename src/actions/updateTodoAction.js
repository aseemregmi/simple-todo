import { UPDATE_TODO } from './types';
import axios from 'axios';

export default (auth, body) => {
  return async dispatch => {
    const res = await axios.patch(
      `https://protected-thicket-67134.herokuapp.com/todos/${body.id}`,
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
