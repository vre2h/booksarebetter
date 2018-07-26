import { LOGIN_SUCCESS, LOGOUT } from './constants';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const logOut = () => ({
  type: LOGOUT,
});

export { loginSuccess, logOut };
