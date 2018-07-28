import { combineReducers } from 'redux';
import {
  RECEIVE_FAV_MOVIES,
  REQUEST_FAV_MOVIES,
  FAILURE_FAV_MOVIES,
} from '../actions/constants';
import favoriteIds from './favs';

const initialState = {
  isFetching: false,
  movies: [],
};

const movies = (state = initialState.movies, action) => {
  switch (action.type) {
    case RECEIVE_FAV_MOVIES:
      return action.payload.movies;
    default:
      return state;
  }
};

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case REQUEST_FAV_MOVIES:
      return true;
    case RECEIVE_FAV_MOVIES:
      return false;
    case FAILURE_FAV_MOVIES:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FAILURE_FAV_MOVIES:
      return action.err;
    default:
      return state;
  }
};

export default combineReducers({
  movies,
  isFetching,
  error,
  favoriteIds,
});
