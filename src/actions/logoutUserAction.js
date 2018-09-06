import { USER_LOGOUT } from './types';

import axios from 'axios';

export default token => {
  return async dispatch => {
    await axios.delete(
      'https://protected-thicket-67134.herokuapp.com/users/me/token',
      {
        withCredentials: true,
        headers: { 'X-Auth': token }
      }
    );

    localStorage.removeItem('user');

    dispatch({
      type: USER_LOGOUT,
      payload: {}
    });
  };
};
