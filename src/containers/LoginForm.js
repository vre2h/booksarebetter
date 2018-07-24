import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { loginSuccess } from '../actions';

import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginSuccess(user)),
});

const LoginForm = reduxForm({
  form: 'loginForm',
})(Login);

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
