import { USER_SIGNUP } from './types';
import axios from 'axios';

export default user => {
  return async dispatch => {
    const res = await axios.post('http://localhost:3000/users', user);
    const tokenLength = res.data.tokens.length;
    const auth = res.data.tokens[tokenLength - 1].token;

    localStorage.setItem(
      'user',
      JSON.stringify({
        'x-auth': auth,
        email: res.data.email,
        _id: res.data._id
      })
    );

    dispatch({
      type: USER_SIGNUP,
      payload: {
        'x-auth': auth,
        email: res.data.email,
        _id: res.data._id
      }
    });
  };
};
