import { isFetching, movies, error } from '../../reducers/getFavMovies';
import {
  REQUEST_FAV_MOVIES,
  RECEIVE_FAV_MOVIES,
  FAILURE_FAV_MOVIES,
} from '../../actions/constants';

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, { type: FAILURE_FAV_MOVIES, err: 'error' })).toBe(
      'error'
    );
  });

  test('return state on non-type', () => {
    expect(error(null, { type: 'aaa', err: 'error' })).toEqual(null);
  });
});

describe('testing isFetching', () => {
  test('on sent request', () => {
    expect(isFetching(false, { type: REQUEST_FAV_MOVIES })).toBe(true);
  });

  test('on receive', () => {
    expect(isFetching(true, { type: RECEIVE_FAV_MOVIES })).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, { type: FAILURE_FAV_MOVIES })).toBe(false);
  });

  test('return state on non-type', () => {
    expect(isFetching(false, { type: 'WOW' })).toBe(false);
  });
});

describe('testing movies', () => {
  test('on receive', () => {
    expect(
      movies([], {
        type: RECEIVE_FAV_MOVIES,
        payload: {
          movies: [{ id: 1, name: 'Forest Gump' }],
        },
      })
    ).toEqual([{ id: 1, name: 'Forest Gump' }]);
  });

  test('return state on non-type', () => {
    expect(movies([{ id: 1, name: 'Forest Gump' }], { type: 'WOW' })).toEqual([
      { id: 1, name: 'Forest Gump' },
    ]);
  });
});
