import { LOGOUT, LOGIN_SUCCESS } from '../actions/constants';

export const isAuth = (state = false, action) => {
  switch (action.type) {
    case LOGOUT: {
      return false;
    }
    case LOGIN_SUCCESS: {
      return true;
    }
    default:
      return state;
  }
};

export default isAuth;
