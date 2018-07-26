import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={ProtectedRouteContainer} />
      <Route path="/login" component={LoginForm} />
      <Route path="/search/" component={ProtectedRouteContainer} />
    </Switch>
  </React.Fragment>
);

export default App;
