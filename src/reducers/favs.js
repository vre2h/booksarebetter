import { ADD_FAV, REMOVE_FAV } from '../actions/constants';

export const favoriteIds = (state = [], action) => {
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

export default favoriteIds;
