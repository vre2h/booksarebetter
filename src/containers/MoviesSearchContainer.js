import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Movies from '../components/Movies/Movies';
import { requestMovies, updSearchField } from '../actions';
import getMoviesSelector from '../selectors/getMovies';

const mapStateToProps = state => {
  return {
    genresById: state.moviesInfo.genresById,
    genreName: 'SEARCH',
    isFetching: state.moviesInfo.isFetching,
    movies: getMoviesSelector(state),
  };
};

class MoviesSearchContainer extends React.Component {
  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);

    this.props.updSearchField(parsed['key']);
    this.props.fetchData(
      'search',
      undefined,
      parsed['key'],
      this.props.genresById
    );
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
