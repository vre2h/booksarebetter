import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { MuiThemeProvider } from 'material-ui/styles';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <Route path="/" component={ProtectedRoute} />
      </MuiThemeProvider>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
