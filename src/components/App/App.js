import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/movies" />} />
      <Route path="/movies" component={ProtectedRouteContainer} />
      <Route path="/login" component={LoginForm} />
      <Route render={() => <h1>Not Found App</h1>} />
    </Switch>
  </React.Fragment>
);

export default App;
