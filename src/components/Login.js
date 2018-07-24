import React from 'react';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';

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
    const { handleSubmit, login, pristine, reset, submitting } = this.props;
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
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
