import { createSelector } from 'reselect';

const selectMoviesInfo = state => state.moviesInfo;
const selectMoviesSelector = state => state.moviesInfo.moviesSelector;

const allMovies = moviesInfo => {
  return Array.from(moviesInfo.allIds).map(id => moviesInfo.moviesById[id]);
};

export default createSelector(
  selectMoviesInfo,
  selectMoviesSelector,
  selectMovies => allMovies(selectMovies)
);
