import {
  error,
  isFetching,
  totalPages,
  page,
  moviesSelector,
  moviesByGenre,
  genresById,
} from '../../reducers/getMovies';
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  RECEIVE_MOVIES_FROM_SCROLL,
  FAILURE_MOVIES,
  MOVIES_SELECTOR,
  RECEIVE_GENRES_BY_ID,
} from '../../actions/constants';

describe('testing total pages', () => {
  test('get total pages from onscroll', () => {
    expect(
      totalPages(0, {
        type: RECEIVE_MOVIES_FROM_SCROLL,
        payload: {
          totalPages: 100,
        },
      })
    ).toBe(100);
  });

  test('return state on non-action', () => {
    expect(totalPages(0, { type: 'aaa', err: 'error' })).toBe(0);
  });
});

describe('testing page', () => {
  test('get page from onscroll', () => {
    expect(
      page(0, {
        type: RECEIVE_MOVIES_FROM_SCROLL,
        payload: {
          page: 100,
        },
      })
    ).toBe(100);
  });

  test('return state on non-action', () => {
    expect(page(0, { type: 'aaa', err: 'error' })).toBe(0);
  });
});

describe('testing error', () => {
  test('get error message', () => {
    expect(error(null, { type: FAILURE_MOVIES, err: 'error' })).toBe('error');
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
    expect(isFetching(true, { type: RECEIVE_MOVIES })).toBe(false);
  });

  test('on scroll receive', () => {
    expect(isFetching(true, { type: RECEIVE_MOVIES_FROM_SCROLL })).toBe(false);
  });

  test('on failure', () => {
    expect(isFetching(true, { type: FAILURE_MOVIES })).toBe(false);
  });

  test('return state on non-action', () => {
    expect(isFetching(false, { type: 'WOW' })).toEqual(false);
  });
});

describe('testing movies', () => {
  test('on receive', () => {
    expect(
      moviesByGenre([], {
        type: RECEIVE_MOVIES,
        payload: {
          movies: [{ id: 1, name: 'Forest Gump' }],
        },
      }),
      [{ id: 1, name: 'Forest Gump' }]
    );
  });

  test('on scroll receive', () => {
    expect(
      moviesByGenre([{ id: 1, name: 'Forest Gump' }], {
        type: RECEIVE_MOVIES_FROM_SCROLL,
        payload: {
          movies: [{ id: 2, name: 'Inception' }],
        },
      }),
      [{ id: 1, name: 'Forest Gump' }, { id: 2, name: 'Inception' }]
    );
  });

  test('return state on non-action', () => {
    expect(
      moviesByGenre([{ id: 1, name: 'Forest Gump' }], { type: 'WOW' })
    ).toEqual([{ id: 1, name: 'Forest Gump' }]);
  });
});

describe('test selector', () => {
  test('return new state', () => {
    expect(
      moviesSelector('popular', {
        type: MOVIES_SELECTOR,
        payload: {
          moviesSelector: 'search',
        },
      })
    ).toBe('search');
  });

  test('return state on non-action', () => {
    expect(
      moviesSelector('popular', { type: 'aaa', moviesSelector: 'search' })
    ).toBe('popular');
  });
});

describe('test getting genres by id', () => {
  test('return new state', () => {
    expect(
      genresById(null, {
        type: RECEIVE_GENRES_BY_ID,
        payload: {
          genresById: [{ 1: 'family' }],
        },
      })
    ).toEqual([{ 1: 'family' }]);
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
