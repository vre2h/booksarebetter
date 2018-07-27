import { ADD_FAV, REMOVE_FAV } from './constants';

const addFav = id => ({
  type: ADD_FAV,
  payload: {
    id,
  },
});

const removeFav = id => ({
  type: REMOVE_FAV,
  payload: {
    id,
  },
});

export { addFav, removeFav };