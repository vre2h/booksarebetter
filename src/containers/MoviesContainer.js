import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { requestMovies } from '../actions';

class MoviesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData('popular', 1, undefined, this.props.genresById);
  }

  render() {
    const { movies, genresById, genreName, isFetching } = this.props;
    return (
      <Movies
        movies={movies}
        genresById={genresById}
        genreName={genreName}
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesInfo.moviesByGenre,
    genresById: state.moviesInfo.genresById,
    genreName: state.moviesInfo.moviesSelector.toUpperCase(),
    isFetching: state.moviesInfo.isFetching,
  };
};

MoviesContainer = connect(
  mapStateToProps,
  {
    fetchData: requestMovies,
  }
)(MoviesContainer);

export default MoviesContainer;
