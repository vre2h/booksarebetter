import { updSearchField } from '../../reducers/search';
import { UPD_SEARCH_FIELD } from '../../actions/constants';

describe('test search field updater', () => {
  test('return state on non-action ', () => {
    expect(updSearchField('a', { type: 'wow' })).toBe('a');
  });

  test('return new state ', () => {
    expect(
      updSearchField('a', { type: UPD_SEARCH_FIELD, payload: { value: 'aa' } })
    ).toBe('aa');
  });
});
