import { USER_LOGOUT } from './types';

import axios from 'axios';

export default token => {
  return async dispatch => {
    const res = await axios.delete(
      'https://protected-thicket-67134.herokuapp.com/users/me/token',
      {
        headers: { 'x-auth': token }
      }
    );

    localStorage.removeItem('user');

    dispatch({
      type: USER_LOGOUT,
      payload: {}
    });
  };
};
