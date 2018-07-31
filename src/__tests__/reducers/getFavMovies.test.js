import { isFetching, movies, error } from '../../reducers/getFavMovies';
import {
  failureFavMovies,
  requestFavMovies,
  receiveFavMovies,
} from '../../actions/favs';

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, failureFavMovies('error'))).toBe('error');
  });

  test('return state on non-type', () => {
    expect(error(null, { type: 'aaa', err: 'error' })).toEqual(null);
  });
});

describe('testing isFetching', () => {
  test('on sent request', () => {
    expect(isFetching(false, requestFavMovies())).toBe(true);
  });

  test('on receive', () => {
    expect(isFetching(true, receiveFavMovies())).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, failureFavMovies())).toBe(false);
  });

  test('return state on non-type', () => {
    expect(isFetching(false, { type: 'WOW' })).toBe(false);
  });
});

describe('testing movies', () => {
  test('on receive', () => {
    expect(
      movies([], receiveFavMovies([{ id: 1, name: 'Forest Gump' }]))
    ).toEqual([{ id: 1, name: 'Forest Gump' }]);
  });

  test('return state on non-type', () => {
    expect(movies([{ id: 1, name: 'Forest Gump' }], { type: 'WOW' })).toEqual([
      { id: 1, name: 'Forest Gump' },
    ]);
  });
});
