import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
console.log('protected container');
const mapStateToProps = state => {
  console.log('statetoprops');
  return {
    isAuth: state.isAuth,
  };
};

export default connect(
  mapStateToProps,
  null
)(ProtectedRoute);
