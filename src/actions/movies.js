import {
  FAILURE_MOVIES,
  RECEIVE_MOVIES,
  REQUEST_MOVIES,
  MOVIES_SELECTOR,
  REQUEST_GENRES_BY_ID,
  RECEIVE_GENRES_BY_ID,
} from './constants';
import { updSearchField } from './search';

/*
 * helper fn to avoid repeating fetch in if/else
 * also it contains object which corresponds movie selector
 * with url for fetching
 */
const fetchMovies = dispatch => (movieSelector, page, searchText = '') => {
  const urls = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&page=${page}`,
    search: `https://api.themoviedb.org/3/search/movie?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US&query=${searchText}&include_adult=true`,
  };

  fetch(urls[movieSelector])
    .then(r => r.json())
    .then(data => dispatch(receiveMovies(movieSelector, data)))
    .catch(err => dispatch(failureMovies(err)));
};

/*
 * We should receive obj of genresById
 * because movies response gives to us arr of id's
 * instead of names of genres.
 * Each of field response for one genre is {id: num, name: 'genre'}.
 * So we refactoring it to {id:'genre'}.
 * After we're saving it in the store.
 * And we're requesting it only once because it's not change
 */
const requestMovies = (
  selector = 'popular',
  page = 1,
  text,
  listOfGenreById
) => {
  return dispatch => {
    if (selector !== 'search') {
      dispatch(updSearchField(''));
    }
    dispatch(moviesSelector(selector));
    dispatch({ type: REQUEST_MOVIES });
    const dispatchedFetchMovies = fetchMovies(dispatch);
    let genresById = {};

    if (listOfGenreById) {
      dispatchedFetchMovies(selector, page, text, listOfGenreById);
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
          return dispatchedFetchMovies(selector, page, text, listOfGenreById);
        });
    }
  };
};

const receiveGenresById = genresById => ({
  type: RECEIVE_GENRES_BY_ID,
  payload: {
    genresById,
  },
});

const moviesSelector = moviesSelector => ({
  type: MOVIES_SELECTOR,
  payload: {
    moviesSelector,
  },
});

const failureMovies = err => ({
  type: FAILURE_MOVIES,
  err,
});

const receiveMovies = (moviesSelector, movies) => ({
  type: RECEIVE_MOVIES,
  payload: {
    moviesSelector,
    movies: movies.results,
  },
});

export {
  failureMovies,
  receiveMovies,
  receiveGenresById,
  moviesSelector,
  requestMovies,
};
