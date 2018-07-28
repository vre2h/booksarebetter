import { createSelector } from 'reselect';

export const isAuth = state => state.isAuth;

export default createSelector(isAuth, isAuth => isAuth);
