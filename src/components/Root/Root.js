import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import './styles.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="container">
        <App />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
