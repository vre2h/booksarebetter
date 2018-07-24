import { LOGIN_SUCCESS } from '../actions';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default currentUser;
