import { USER_LOGIN } from './types';
import axios from 'axios';
// https://protected-thicket-67134.herokuapp.com/users/login
export default user => {
  return async dispatch => {
    const res = await axios.post(
      'https://protected-thicket-67134.herokuapp.com/login',
      user
    );

    const tokenLength = res.data.tokens.length;

    // console.log(JSON.stringify(res, undefined, 2));
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
