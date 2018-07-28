import { createSelector } from 'reselect';

const selectGenreName = state => state.moviesInfo.moviesSelector;

export default createSelector(selectGenreName, selectGenreName =>
  selectGenreName.toUpperCase()
);
