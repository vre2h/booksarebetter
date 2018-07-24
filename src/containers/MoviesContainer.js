import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';

const mapStateToProps = state => {
  return {
    movies: state.moviesInfo.moviesByGenre.movies,
  };
};

export default connect(
  mapStateToProps,
  null
)(Movies);
