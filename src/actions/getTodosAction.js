import { GET_TODOS } from './types';
import axios from 'axios';

export default token => {
  return async dispatch => {
    const res = await axios.get(
      'https://protected-thicket-67134.herokuapp.com/todos',
      {
        headers: { 'x-auth': token }
      }
    );

    dispatch({
      type: GET_TODOS,
      payload: res.data.todos
    });
  };
};
