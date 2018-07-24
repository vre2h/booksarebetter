const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export { loginSuccess };
