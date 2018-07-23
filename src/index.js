import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configureStore from './store/configureStore.dev';
import 'normalize.css';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
