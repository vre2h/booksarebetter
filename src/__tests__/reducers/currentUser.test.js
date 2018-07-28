import currentUser from '../../reducers/currentUser';
import { LOGOUT, LOGIN_SUCCESS } from '../../actions/constants';

test('null on logout', () => {
  expect(currentUser({}, { type: LOGOUT })).toEqual(null);
});

test('userdata on login', () => {
  expect(
    currentUser(null, {
      type: LOGIN_SUCCESS,
      payload: { username: 'username', password: 'password' },
    })
  ).toEqual({ username: 'username', password: 'password' });
});
