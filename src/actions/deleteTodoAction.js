import { DELETE_TODO } from './types';
import axios from 'axios';

export default (auth, id) => {
  return async dispatch => {
    await axios.delete(
      `http://localhost:3000/todos/${id}`,

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
