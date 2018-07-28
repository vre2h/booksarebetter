import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { requestMovies, updSearchField } from '../actions';

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
    const { searcher } = this.props.match.params;
    this.props.updSearchField(searcher);
    this.props.fetchData('search', undefined, searcher, this.props.genresById);
  }

  render() {
    const { genresById, genreName, isFetching, movies } = this.props;

    return (
      <Movies
        genresById={genresById}
        genreName={genreName}
        isFetching={isFetching}
        movies={movies}
        fromSearch={true}
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
