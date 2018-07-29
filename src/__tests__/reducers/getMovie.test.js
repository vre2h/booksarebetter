import { isFetching, error, currentMovie } from '../../reducers/getMovie';
import {
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  FAILURE_MOVIE,
} from '../../actions/constants';

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, { type: FAILURE_MOVIE, err: 'error' })).toBe('error');
  });

  test('return state on non-action', () => {
    expect(error(null, { type: 'aaa', err: 'error' })).toEqual(null);
  });
});

describe('testing isFetching', () => {
  test('on sent request', () => {
    expect(isFetching(false, { type: REQUEST_MOVIE })).toBe(true);
  });

  test('on receive', () => {
    expect(isFetching(true, { type: RECEIVE_MOVIE })).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, { type: FAILURE_MOVIE })).toBe(false);
  });

  test('return state on non-action', () => {
    expect(isFetching(false, { type: 'WOW' })).toBe(false);
  });
});

describe('testing movies', () => {
  test('on receive', () => {
    expect(
      currentMovie([], {
        type: RECEIVE_MOVIE,
        payload: {
          movie: { id: 1, name: 'Forest Gump' },
        },
      })
    ).toEqual({ id: 1, name: 'Forest Gump' });
  });

  test('return state on non-action', () => {
    expect(
      currentMovie({ id: 1, name: 'Forest Gump' }, { type: 'WOW' })
    ).toEqual({ id: 1, name: 'Forest Gump' });
  });
});
