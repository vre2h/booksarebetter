import currentUser from '../../reducers/currentUser';
import { logOut, loginSuccess } from '../../actions/login';

test('null on logout', () => {
  expect(currentUser({}, logOut())).toEqual(null);
});

test('userdata on login', () => {
  expect(
    currentUser(
      null,
      loginSuccess({ username: 'username', password: 'password' })
    )
  ).toEqual({ username: 'username', password: 'password' });
});

test('return state on non-action', () => {
  expect(currentUser({}, { type: 'WOW' })).toEqual({});
});
