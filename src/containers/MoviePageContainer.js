import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/moviePage';
import MoviePage from '../components/MoviePage';
import { addFav, removeFav } from '../actions/favs';
class MoviePageContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchData } = this.props;

    fetchData(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { movie, addFav, removeFav, favs } = this.props;
    const isFav = favs.includes(id);

    return (
      <MoviePage
        movie={movie}
        isFav={isFav}
        addFav={addFav}
        removeFav={removeFav}
        id={id}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.movieInfo.currentMovie,
  favs: state.favorites.favoriteIds,
});

const mapDispatchToProps = dispatch => ({
  fetchData: id => dispatch(fetchMovie(id)),
  addFav: id => dispatch(addFav(id)),
  removeFav: id => dispatch(removeFav(id)),
});

MoviePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePageContainer);

export default MoviePageContainer;
