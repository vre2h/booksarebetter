import { isAuth } from '../../reducers/isAuth';
import { logOut, loginSuccess } from '../../actions/login';

describe('test is auth', () => {
  test('return state for non-action - 1', () => {
    expect(isAuth(false, { type: 'wow' })).toBe(false);
  });

  test('return state for non-action - 2', () => {
    expect(isAuth(true, { type: 'wow' })).toBe(true);
  });

  test('change state on logout', () => {
    expect(isAuth(true, logOut())).toBe(false);
  });

  test('change state on login', () => {
    expect(isAuth(false, loginSuccess())).toBe(true);
  });
});
