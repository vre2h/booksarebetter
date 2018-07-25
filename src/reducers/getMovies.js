import { combineReducers } from 'redux';
import {
  FAILURE_MOVIES,
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SELECT_GENRE,
} from '../actions/constants';

const initialState = {
  selectedGenre: 'popular',
  isFetching: false,
  movies: [],
};

const selectedGenre = (state = initialState.selectedGenre, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return action.payload.selectedGenre;
    default:
      return state;
  }
};

const moviesByGenre = (state = initialState.movies, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.movies;
    default:
      return state;
  }
};

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return true;
    case RECEIVE_MOVIES:
      return false;
    case FAILURE_MOVIES:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FAILURE_MOVIES:
      return action.err;
    default:
      return state;
  }
};

export default combineReducers({
  selectedGenre,
  moviesByGenre,
  isFetching,
  error,
});
