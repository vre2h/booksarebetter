import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';

const mapStateToProps = state => {
  return {
    movies: state.moviesInfo.moviesByGenre,
    genresById: state.moviesInfo.genresById,
    genreName: state.moviesInfo.moviesSelector.toUpperCase(),
  };
};

export default connect(
  mapStateToProps,
  null
)(Movies);
