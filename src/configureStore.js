import { createStore, compose } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import rootReducer from './reducer';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }
  const store = createStore(
    rootReducer,
    persistedState,
    compose(
      ...middlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
