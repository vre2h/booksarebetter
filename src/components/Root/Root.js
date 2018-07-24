import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import App from '../App';
import './styles.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div className="container">
          <App />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
