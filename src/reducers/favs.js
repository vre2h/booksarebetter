import { ADD_FAV, REMOVE_FAV } from '../actions/constants';

const favorites = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV: {
      return state.concat(action.payload.id);
    }
    case REMOVE_FAV: {
      return state.filter(id => id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default favorites;
