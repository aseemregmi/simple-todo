import { USER_LOGIN, HEROKU_URL, LOCALHOST_URL } from './types';
import axios from 'axios';
export default user => {
  return async dispatch => {
    const res = await axios.post(`${HEROKU_URL}/users/login`, user);

    const tokenLength = res.data.tokens.length;

    localStorage.setItem(
      'user',
      JSON.stringify({
        'x-auth': res.data.tokens[tokenLength - 1].token,
        email: res.data.email,
        _id: res.data._id
      })
    );

    dispatch({
      type: USER_LOGIN,
      payload: {
        'x-auth': res.data.tokens[tokenLength - 1].token,
        email: res.data.email,
        _id: res.data._id
      }
    });
  };
};
