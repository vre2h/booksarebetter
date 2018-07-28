import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from './reducer';
import { loadState, saveState } from '../localStorage';
import thunk from 'redux-thunk';

const configureStore = () => {
  const persistedState = loadState('booksarebetter');
  const middlewares = [thunk];

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(
    throttle(() => {
      saveState(
        {
          isAuth: store.getState().isAuth,
          currentUser: store.getState().currentUser,
          favorites: store.getState().favorites,
        },
        'booksarebetter'
      );
    }, 1000)
  );

  return store;
};

export default configureStore;
