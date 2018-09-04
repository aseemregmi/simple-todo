import { POST_TODO } from './types';
import axios from 'axios';

export default (text, auth) => {
  return async dispatch => {
    const res = await axios.post(
      'https://protected-thicket-67134.herokuapp.com/todos',
      { text },
      {
        headers: {
          'x-auth': auth
        }
      }
    );

    dispatch({
      type: POST_TODO,
      payload: res.data
    });
  };
};
