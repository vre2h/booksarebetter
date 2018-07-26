import { UPD_SEARCH_FIELD } from '../actions/constants';

const updSearchField = (state = '', action) => {
  switch (action.type) {
    case UPD_SEARCH_FIELD: {
      return action.payload.value;
    }
    default:
      return state;
  }
};

export default updSearchField;
