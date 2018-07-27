import { combineReducers } from 'redux';
import {
  FAILURE_MOVIE,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
} from '../actions/constants';

const initialState = {
  isFetching: false,
  movie: {},
};

const currentMovie = (state = initialState.movie, action) => {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return action.payload.movie;
    default:
      return state;
  }
};

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return true;
    case RECEIVE_MOVIE:
      return false;
    case FAILURE_MOVIE:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FAILURE_MOVIE:
      return action.err;
    default:
      return state;
  }
};

export default combineReducers({
  currentMovie,
  isFetching,
  error,
});
