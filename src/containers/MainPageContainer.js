import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import { requestMovies } from '../actions';

const mapDispatchToProps = dispatch => ({
  fetchData: (...arg) => dispatch(requestMovies(...arg)),
});

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
