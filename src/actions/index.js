import {
  LOGIN_SUCCESS,
  FAILURE_MOVIES,
  RECEIVE_MOVIES,
  REQUEST_MOVIES,
  SELECT_GENRE,
  LOGOUT,
} from './constants';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const logOut = () => ({
  type: LOGOUT,
});

const requestMovies = (genre, page = 1) => {
  return dispatch => {
    dispatch(selectGenre);
    dispatch({ type: REQUEST_MOVIES });

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&page=${page}`
    )
      .then(r => r.json())
      .then(data => dispatch(receiveMovies(genre, data)))
      .catch(err => dispatch(failureMovies(err)));
  };
};

const selectGenre = genre => ({
  type: SELECT_GENRE,
  payload: {
    selectedGenre: genre,
  },
});

const failureMovies = err => ({
  type: FAILURE_MOVIES,
  err,
});

const receiveMovies = (selectedGenre, movies) => ({
  type: RECEIVE_MOVIES,
  payload: {
    selectedGenre,
    movies: movies.results,
  },
});

export {
  loginSuccess,
  logOut,
  failureMovies,
  receiveMovies,
  selectGenre,
  requestMovies,
  LOGIN_SUCCESS,
};
