import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { loginSuccess } from '../actions';
import Login from '../components/Login/';
import validate from '../helpers/validate';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginSuccess(user)),
});

const mapStateToProps = state => ({
  isAuth: state.isAuth,
});

const LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
