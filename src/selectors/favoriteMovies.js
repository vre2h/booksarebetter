import { createSelector } from 'reselect';

export const movies = state => state.favorites.movies;

export default createSelector(movies, movies => movies);
