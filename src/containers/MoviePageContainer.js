import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/moviePage';
import MoviePage from '../components/MoviePage';

class MoviePageContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchData } = this.props;

    fetchData(id);
  }

  render() {
    const { movie } = this.props;
    return <MoviePage movie={movie} />;
  }
}

const mapStateToProps = state => ({
  movie: state.movieInfo.currentMovie,
});

const mapDispatchToProps = dispatch => ({
  fetchData: id => dispatch(fetchMovie(id)),
});

MoviePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePageContainer);

export default MoviePageContainer;
