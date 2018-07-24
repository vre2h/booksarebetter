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
        <form onSubmit={handleSubmit(login)}>
          <div className="led-red">Rec</div>
          <div>
            <Field
              name="firstName"
              component={RenderTextField}
              id="formInlineName"
              type="text"
              label="Text"
              bsSize="large"
              placeholder="Login.."
            />
          </div>
          <div>
            <Field
              name="password"
              component={RenderTextField}
              id="formControlsPassword"
              type="password"
              label="Password"
              placeholder="Password.."
              bsSize="large"
            />
          </div>
          <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              block
              type="submit"
              disabled={!valid}
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
