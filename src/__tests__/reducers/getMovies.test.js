import {
  error,
  isFetching,
  totalPages,
  page,
  moviesSelector,
  genresById,
  allIds,
  moviesById,
} from '../../reducers/getMovies';
import {
  receiveMovies,
  failureMovies,
  moviesSelector as movSelector,
  receiveGenresById,
} from '../../actions/movies';
import { REQUEST_MOVIES } from '../../actions/constants';

describe('test movies', () => {
  test('non-action case', () => {
    expect(moviesById({}, { type: 'wow' })).toEqual({});
  });

  test('new movies came', () => {
    expect(
      moviesById(
        {},
        receiveMovies(undefined, {
          results: [
            { id: 1, name: 'Forest Gump' },
            { id: 2, name: 'Inception' },
          ],
        })
      )
    ).toEqual({
      1: { id: 1, name: 'Forest Gump' },
      2: { id: 2, name: 'Inception' },
    });
  });
});

describe('test getting all ids', () => {
  test('non-action case', () => {
    const set = new Set([]);
    expect(allIds(set, { type: 'wow' })).toEqual(set);
  });

  test('new movies came', () => {
    const set = new Set([2]);
    expect(
      allIds(
        set,
        receiveMovies('search', {
          results: [{ id: 1 }, { id: 3 }],
        })
      )
    ).toEqual(new Set([1, 3]));
  });

  test('clean store', () => {
    const set = new Set([]);
    expect(
      allIds(set, {
        type: 'CLEAN_STORE',
        payload: {
          movies: [{ id: 1 }, { id: 3 }],
        },
      })
    ).toEqual(set);
  });

  test('new movies came from search', () => {
    expect(
      allIds(
        new Set([1, 2]),
        receiveMovies('search', {
          results: [
            { id: 1, name: 'Forest Gump' },
            { id: 2, name: 'Inception' },
          ],
        })
      )
    ).toEqual(new Set([1, 2]));
  });
});

describe('testing total pages', () => {
  test('get total pages from onscroll', () => {
    expect(
      totalPages(
        0,
        receiveMovies(undefined, {
          total_pages: 100,
        })
      )
    ).toBe(100);
  });

  test('return state on non-action', () => {
    expect(totalPages(0, { type: 'aaa', err: 'error' })).toBe(0);
  });
});

describe('testing page', () => {
  test('get page from onscroll', () => {
    expect(page(0, receiveMovies(undefined, { page: 100 }))).toBe(100);
  });

  test('return state on non-action', () => {
    expect(page(0, { type: 'aaa', err: 'error' })).toBe(0);
  });
});

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, failureMovies('error'))).toBe('error');
  });

  test('return state on non-action', () => {
    expect(error(null, { type: 'aaa', err: 'error' })).toEqual(null);
  });
});

describe('testing isFetching', () => {
  test('on sent request', () => {
    expect(isFetching(false, { type: REQUEST_MOVIES })).toBe(true);
  });

  test('on receive', () => {
    expect(isFetching(true, receiveMovies(undefined, []))).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, failureMovies())).toBe(false);
  });

  test('return state on non-action', () => {
    expect(isFetching(false, { type: 'WOW' })).toEqual(false);
  });
});

describe('test selector', () => {
  test('return new state', () => {
    expect(moviesSelector('popular', movSelector('search'))).toBe('search');
  });

  test('return state on non-action', () => {
    expect(
      moviesSelector('popular', { type: 'aaa', moviesSelector: 'search' })
    ).toBe('popular');
  });
});

describe('test getting genres by id', () => {
  test('return new state', () => {
    expect(genresById(null, receiveGenresById([{ 1: 'family' }]))).toEqual([
      { 1: 'family' },
    ]);
  });

  test('return state on non-action', () => {
    expect(
      genresById([{ 1: 'family' }], {
        type: 'aa',
        payload: { genresById: ['wow'] },
      })
    ).toEqual([{ 1: 'family' }]);
  });
});
