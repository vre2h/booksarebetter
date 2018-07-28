import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import './styles.css';
import ScrollToTop from '../ScrollToTop.js';
const Root = ({ store }) => {
  const { isAuth } = store.getState();
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <div className={`container ${isAuth ? '' : 'login-container'}`}>
            <App />
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
