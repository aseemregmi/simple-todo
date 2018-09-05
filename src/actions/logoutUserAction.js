import { USER_LOGOUT } from './types';

import axios from 'axios';

export default token => {
  return async dispatch => {
    const res = await axios.delete('http://localhost:3000/users/me/token', {
      withCredentials: true,
      headers: { 'X-Auth': token }
    });

    localStorage.removeItem('user');

    dispatch({
      type: USER_LOGOUT,
      payload: {}
    });
  };
};
