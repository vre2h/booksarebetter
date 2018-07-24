import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    // return this.props.isAuth ? <Redirect to="aaa" /> : <LoginForm />;
    return (
      <Route
        render={props =>
          this.props.isAuth ? (
            <h1>a</h1>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}

export default ProtectedRoute;
