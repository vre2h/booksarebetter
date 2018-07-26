import {
  LOGIN_SUCCESS,
  FAILURE_MOVIES,
  RECEIVE_MOVIES,
  REQUEST_MOVIES,
  SELECT_GENRE,
  LOGOUT,
  REQUEST_GENRES_BY_ID,
  RECEIVE_GENRES_BY_ID,
} from './constants';

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const logOut = () => ({
  type: LOGOUT,
});

// helper fn to avoid repeating fetch in if/else
const fetchMovies = dispatch => (genre, page, listOfGenreById) => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&page=${page}`
  )
    .then(r => r.json())
    .then(data => dispatch(receiveMovies(genre, data, listOfGenreById)))
    .catch(err => dispatch(failureMovies(err)));
};

/*
 * we should receive obj of genresById
 * because movies response gives to us arr of id's.
 * Each of field response for one genre {id:genre}
 * after we're saving it in the store
 * for further using in posts
 */
const requestMovies = (genre, page = 1, listOfGenreById) => {
  return dispatch => {
    dispatch(selectGenre);
    dispatch({ type: REQUEST_MOVIES });
    const dispatchedFetchMovies = fetchMovies(dispatch);
    let genresById = {};

    if (listOfGenreById) {
      dispatchedFetchMovies(genre, page, listOfGenreById);
    } else {
      dispatch({ type: REQUEST_GENRES_BY_ID });
      fetch(
        '  https://api.themoviedb.org/3/genre/movie/list?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US'
      )
        .then(r => r.json())
        .then(d => {
          genresById = d.genres.reduce(
            (acc, elem) => ({ ...acc, [elem.id]: elem.name }),
            {}
          );
          dispatch(receiveGenresById(genresById));
          return dispatchedFetchMovies(genre, page, listOfGenreById);
        });
    }
  };
};

const receiveGenresById = genresById => ({
  type: RECEIVE_GENRES_BY_ID,
  payload: genresById,
});

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
  receiveGenresById,
  selectGenre,
  requestMovies,
  LOGIN_SUCCESS,
};
