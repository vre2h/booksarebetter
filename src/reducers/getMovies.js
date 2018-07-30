import { combineReducers } from 'redux';
import {
  FAILURE_MOVIES,
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  MOVIES_SELECTOR,
  RECEIVE_GENRES_BY_ID,
} from '../actions/constants';

const initialState = {
  moviesSelector: 'popular',
  isFetching: false,
  moviesById: {},
  allIds: new Set(),
  page: 1,
  totalPages: 0,
};

export const moviesSelector = (state = initialState.moviesSelector, action) => {
  switch (action.type) {
    case MOVIES_SELECTOR:
      return action.payload.moviesSelector;
    default:
      return state;
  }
};

export const moviesById = (state = initialState.moviesById, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      const newState = action.payload.movies.reduce(
        (acc, movie) => ({
          ...acc,
          [movie.id]: movie,
        }),
        {}
      );
      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
};

export const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      if (action.payload.moviesSelector === 'search') {
        return new Set([...action.payload.movies.map(elem => elem.id)]);
      }
      return new Set([...state, ...action.payload.movies.map(elem => elem.id)]);
    default:
      return state;
  }
};

export const allMovies = state =>
  Array.from(state.allIds).map(id => state.moviesById[id]);

export const page = (state = initialState.page, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.page;
    default:
      return state;
  }
};

export const totalPages = (state = initialState.totalPages, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload.totalPages;
    default:
      return state;
  }
};

export const isFetching = (state = initialState.isFetching, action) => {
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

export const error = (state = null, action) => {
  switch (action.type) {
    case FAILURE_MOVIES:
      return action.err;
    default:
      return state;
  }
};

export const genresById = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_GENRES_BY_ID:
      return action.payload.genresById;
    default:
      return state;
  }
};

export default combineReducers({
  moviesSelector,
  moviesById,
  allIds,
  genresById,
  isFetching,
  page,
  totalPages,
  error,
});
