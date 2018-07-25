import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import './styles.css';
import { Button } from 'react-bootstrap';
import RenderTextField from './TextField';

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.isAuth) {
      return <Redirect to={from} />;
    }

    const { handleSubmit, login, valid } = this.props;

    return (
      <div className="login-wrapper">
        <div className="login">
          <form onSubmit={handleSubmit(login)} className="login-form">
            <div className="led-red">Rec</div>
            <Field
              name="firstName"
              component={RenderTextField}
              id="formInlineName"
              type="text"
              label="Text"
              bsSize="large"
              placeholder="Login.."
            />
            <Field
              name="password"
              component={RenderTextField}
              id="formControlsPassword"
              type="password"
              label="Password"
              placeholder="Password.."
              bsSize="large"
            />
            <Button
              bsStyle="primary"
              bsSize="large"
              block
              type="submit"
              disabled={!valid}
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
