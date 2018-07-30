import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { requestMovies } from '../actions';
import PropTypes from 'prop-types';
import genreName from '../selectors/genreName';
import { allMovies } from '../reducers/getMovies';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.page = 1;
  }

  static propTypes = {
    genreName: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    currFetchPage: PropTypes.number,
    totalFetchPages: PropTypes.number,
    genresById: PropTypes.object,
    fetchData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchData('popular', 1, undefined, this.props.genresById, false);
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const { currFetchPage, genresById } = this.props;

    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      currFetchPage === this.page
    ) {
      this.page += 1;
      this.props.fetchData(
        'popular',
        currFetchPage + 1,
        undefined,
        genresById,
        true
      );
    }
  }

  render() {
    const { movies, genresById, genreName, isFetching } = this.props;
    return (
      <div>
        <Movies
          movies={movies}
          genresById={genresById}
          genreName={genreName}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: allMovies(state.moviesInfo),
    genresById: state.moviesInfo.genresById,
    genreName: genreName(state),
    isFetching: state.moviesInfo.isFetching,
    currFetchPage: state.moviesInfo.page,
    totalFetchPages: state.moviesInfo.totalPages,
  };
};

MoviesContainer = connect(
  mapStateToProps,
  {
    fetchData: requestMovies,
  }
)(MoviesContainer);

export default MoviesContainer;
