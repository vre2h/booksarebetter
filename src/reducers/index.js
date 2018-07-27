import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import currentUser from './currentUser';
import isAuth from './isAuth';
import movies from './getMovies';
import search from './search';
import movie from './getMovie';

export default combineReducers({
  form: reduxFormReducer,
  isAuth,
  currentUser,
  moviesInfo: movies,
  search,
  movieInfo: movie,
});
