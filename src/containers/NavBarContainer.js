import { connect } from 'react-redux';
import NavBar from '../components/NavBar/NavBar';
import { logOut } from '../actions';

export default connect(
  undefined,
  {
    logOut,
  }
)(NavBar);
