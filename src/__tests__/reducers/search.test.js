import { updSearchField as actionUpdSearchField } from '../../actions/search';
import { updSearchField } from '../../reducers/search';

describe('test search field updater', () => {
  test('return state on non-action ', () => {
    expect(updSearchField('a', { type: 'wow' })).toBe('a');
  });

  test('return new state ', () => {
    expect(updSearchField('a', actionUpdSearchField('aa'))).toBe('aa');
  });
});
