import { connect } from 'react-redux';
import ProtectedRoute from '../components/ProtectedRoute';

const mapStateToProps = state => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps)(ProtectedRoute);
