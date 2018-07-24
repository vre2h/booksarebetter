import { combineReducers } from 'redux';
import {
  FAILURE_MOVIES,
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SELECT_GENRE,
} from '../actions/constants';

const initialState = {
  selectedGenre: 'popular',
  moviesByGenre: {
    isFetching: false,
    movies: [],
  },
};

const selectedGenre = (state = initialState.selectedGenre, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return action.payload.selectedGenre;
    default:
      return state;
  }
};

const moviesByGenre = (state = initialState.moviesByGenre, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MOVIES:
      return {
        isFetching: false,
        movies: action.payloads.movie,
      };
    case FAILURE_MOVIES:
      return {
        isFetching: false,
        err: action.err,
      };
    default:
      return state;
  }
};

export default combineReducers({ selectedGenre, moviesByGenre });
