import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

class Login extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.isAuth) {
      return <Redirect to={from} />;
    }

    const { handleSubmit, login, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(login)}>
        <div>
          <Field
            name="firstName"
            component={renderTextField}
            label="First Name"
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
          />
        </div>
        <div>
          <Button
            color="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Log In
          </Button>
        </div>
      </form>
    );
  }
}

export default Login;
