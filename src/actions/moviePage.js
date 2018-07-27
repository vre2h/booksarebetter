import { REQUEST_MOVIE, RECEIVE_MOVIE, FAILURE_MOVIE } from './constants';

const failureMovie = err => ({
  type: FAILURE_MOVIE,
  err,
});

const receiveMovie = movie => {
  return {
    type: RECEIVE_MOVIE,
    payload: {
      movie,
    },
  };
};

const requestMovie = () => ({
  type: REQUEST_MOVIE,
});

const fetchMovie = id => dispatch => {
  dispatch(requestMovie());

  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e8e227add2a2e5c168f7c3845928d8db&language=en-US`
  )
    .then(r => r.json())
    .then(d => dispatch(receiveMovie(d)))
    .catch(err => dispatch(failureMovie(err)));
};

export { fetchMovie };
