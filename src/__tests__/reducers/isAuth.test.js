import { isAuth } from '../../reducers/isAuth';
import { LOGOUT, LOGIN_SUCCESS } from '../../actions/constants';

describe('test is auth', () => {
  test('return state for non-action - 1', () => {
    expect(isAuth(false, { type: 'wow' })).toBe(false);
  });

  test('return state for non-action - 2', () => {
    expect(isAuth(true, { type: 'wow' })).toBe(true);
  });

  test('change state on logout', () => {
    expect(isAuth(true, { type: LOGOUT })).toBe(false);
  });

  test('change state on login', () => {
    expect(isAuth(false, { type: LOGIN_SUCCESS })).toBe(true);
  });
});
