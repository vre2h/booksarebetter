import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { requestMovies, updSearchField } from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    genresById: state.moviesInfo.genresById,
    genreName: 'search'.toUpperCase(),
    isFetching: state.moviesInfo.isFetching,
    movies: state.moviesInfo.moviesBySearch,
  };
};

class MoviesSearchContainer extends React.Component {
  componentDidMount() {
    const searcher = this.props.location.search.slice(5);
    this.props.updSearchField(searcher);
    this.props.fetchData('search', undefined, searcher, this.props.genresById);
  }

  static propTypes = {
    genreName: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    genresById: PropTypes.object,
    fetchData: PropTypes.func.isRequired,
    updSearchField: PropTypes.func.isRequired,
  };

  render() {
    const { genresById, genreName, isFetching, movies } = this.props;

    return (
      <Movies
        genresById={genresById}
        genreName={genreName}
        isFetching={isFetching}
        movies={movies}
      />
    );
  }
}

MoviesSearchContainer = connect(
  mapStateToProps,
  {
    fetchData: requestMovies,
    updSearchField,
  }
)(MoviesSearchContainer);

export default MoviesSearchContainer;
