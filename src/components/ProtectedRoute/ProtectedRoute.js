import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainPageContainer from '../../containers/MainPageContainer';

class ProtectedRoute extends React.Component {
  render() {
    return (
      <Route
        render={props =>
          this.props.isAuth ? (
            <MainPageContainer {...props} />
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
