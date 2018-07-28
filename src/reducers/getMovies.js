import { combineReducers } from 'redux';
import {
  FAILURE_MOVIES,
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  MOVIES_SELECTOR,
  RECEIVE_GENRES_BY_ID,
  RECEIVE_MOVIES_FROM_SCROLL,
} from '../actions/constants';

const initialState = {
  moviesSelector: 'popular',
  isFetching: false,
  movies: [],
  page: 1,
  totalPages: 0,
  moviesBySearch: [],
};

const moviesSelector = (state = initialState.moviesSelector, action) => {
  switch (action.type) {
    case MOVIES_SELECTOR:
      return action.payload.moviesSelector;
    default:
      return state;
  }
};

const moviesByGenre = (state = initialState.movies, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.movies;
    case RECEIVE_MOVIES_FROM_SCROLL:
      return [...state, ...action.payload.movies];
    default:
      return state;
  }
};

const page = (state = initialState.page, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES_FROM_SCROLL:
      return action.payload.page;
    default:
      return state;
  }
};

const totalPages = (state = initialState.totalPages, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES_FROM_SCROLL:
      return action.payload.totalPages;
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
    case RECEIVE_MOVIES_FROM_SCROLL:
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

const genresById = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_GENRES_BY_ID:
      return action.payload.genresById;
    default:
      return state;
  }
};

export default combineReducers({
  moviesSelector,
  moviesByGenre,
  genresById,
  isFetching,
  page,
  totalPages,
  error,
});
