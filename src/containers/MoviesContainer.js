import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';

const mapStateToProps = state => {
  return {
    movies: state.moviesInfo.moviesByGenre,
    genresById: state.moviesInfo.genresById,
  };
};

export default connect(
  mapStateToProps,
  null
)(Movies);
