import { USER_LOGOUT, HEROKU_URL, LOCALHOST_URL } from './types';

import axios from 'axios';

export default token => {
  return async dispatch => {
    await axios.delete(`${HEROKU_URL}/users/me/token`, {
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
