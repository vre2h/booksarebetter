import { LOGIN_SUCCESS } from '../actions';

const isAuth = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return true;
    }
    default:
      return state;
  }
};

export default isAuth;
