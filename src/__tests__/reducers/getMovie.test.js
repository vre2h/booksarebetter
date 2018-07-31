import { isFetching, error, currentMovie } from '../../reducers/getMovie';
import {
  failureMovie,
  requestMovie,
  receiveMovie,
} from '../../actions/moviePage';

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, failureMovie('error'))).toBe('error');
  });

  test('return state on non-action', () => {
    expect(error(null, { type: 'aaa', err: 'error' })).toEqual(null);
  });
});

describe('testing isFetching', () => {
  test('on sent request', () => {
    expect(isFetching(false, requestMovie())).toBe(true);
  });

  test('on receive', () => {
    expect(isFetching(true, receiveMovie())).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, failureMovie())).toBe(false);
  });

  test('return state on non-action', () => {
    expect(isFetching(false, { type: 'WOW' })).toBe(false);
  });
});

describe('testing movies', () => {
  test('on receive', () => {
    expect(
      currentMovie([], receiveMovie({ id: 1, name: 'Forest Gump' }))
    ).toEqual({ id: 1, name: 'Forest Gump' });
  });

  test('return state on non-action', () => {
    expect(
      currentMovie({ id: 1, name: 'Forest Gump' }, { type: 'WOW' })
    ).toEqual({ id: 1, name: 'Forest Gump' });
  });
});
