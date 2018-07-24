import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import { requestMovies } from '../actions';

const mapStateToProps = state => {
  return {
    movies: state.movies.moviesByGenre.movies,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: (...arg) => dispatch(requestMovies(...arg)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
