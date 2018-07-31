import { favoriteIds } from '../../reducers/favs';
import { addFav, removeFav } from '../../actions/favs';

test('add film on fav', () => {
  expect(favoriteIds([], addFav(1))).toEqual(['1']);
});

test('remove film on fav', () => {
  expect(favoriteIds([1, 2], removeFav(2))).toEqual([1, 2]);
});

test('return state on non-action', () => {
  expect(favoriteIds([1, 2, 3], { type: 'WOW' })).toEqual([1, 2, 3]);
});

test('return state on non-action', () => {
  expect(favoriteIds([1, 2, 3], { type: 'WOW' })).toEqual([1, 2, 3]);
});
