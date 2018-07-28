import { createSelector } from 'reselect';

const selectFavIds = (state, props) => state.favorites.favoriteIds;
const selectPropId = (state, props) => props.id;

export default createSelector(
  [selectFavIds, selectPropId],
  (selectFavIds, selectPropId) => selectFavIds.includes(selectPropId)
);
