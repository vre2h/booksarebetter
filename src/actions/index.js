import { LOGIN_SUCCESS } from './constants';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export { loginSuccess, LOGIN_SUCCESS };
