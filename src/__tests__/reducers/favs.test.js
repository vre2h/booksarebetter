import { favoriteIds } from '../../reducers/favs';
import { ADD_FAV, REMOVE_FAV } from '../../actions/constants';

test('add film on fav', () => {
  expect(favoriteIds([], { type: ADD_FAV, payload: { id: 1 } })).toEqual([1]);
});

test('remove film on fav', () => {
  expect(favoriteIds([1, 2], { type: REMOVE_FAV, payload: { id: 2 } })).toEqual(
    [1]
  );
});

test('return state on non-action', () => {
  expect(favoriteIds([1, 2, 3], { type: 'WOW' })).toEqual([1, 2, 3]);
});
