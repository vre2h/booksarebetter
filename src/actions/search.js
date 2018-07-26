import { UPD_SEARCH_FIELD } from './constants';

const updSearchField = value => ({
  type: UPD_SEARCH_FIELD,
  payload: {
    value,
  },
});

export { updSearchField };
