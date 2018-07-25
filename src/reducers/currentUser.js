import { LOGOUT, LOGIN_SUCCESS } from '../actions/constants';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case LOGOUT: {
      return null;
    }
    case LOGIN_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default currentUser;
