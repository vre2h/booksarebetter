import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from '../localStorage';

const configureStore = () => {
  const persistedState = loadState('booksarebetter');
  const middlewares = [logger, thunk];

  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(
    throttle(() => {
      saveState(
        {
          isAuth: store.getState().isAuth,
          currentUser: store.getState().currentUser,
        },
        'booksarebetter'
      );
    }, 1000)
  );

  return store;
};

export default configureStore;
