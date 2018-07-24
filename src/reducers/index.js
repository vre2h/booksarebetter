import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import currentUser from './currentUser';
import isAuth from './isAuth';
import movies from './getMovies';

export default combineReducers({
  form: reduxFormReducer,
  isAuth,
  currentUser,
  movies,
});
