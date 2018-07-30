import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { fetchFavMovies } from '../actions/favs';
import { addFav, removeFav } from '../actions/favs';
import PropTypes from 'prop-types';

class FavoritesContainer extends React.Component {
  static propTypes = {
    favoriteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    fetchFavMovies: PropTypes.func.isRequired,
    genreName: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    addFav: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { favoriteIds, fetchFavMovies } = this.props;

    fetchFavMovies(favoriteIds);
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

const mapStateToProps = (state, ownProps) => ({
  movies: state.favorites.movies || [],
  favoriteIds: state.favorites.favoriteIds,
  genresById: state.moviesInfo.genresById || [],
  genreName: 'FAVORITES',
  isFetching: state.favorites.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchFavMovies: ids => dispatch(fetchFavMovies(ids)),
  addFav: id => dispatch(addFav(id)),
  removeFav: id => dispatch(removeFav(id)),
});

FavoritesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer);

export default FavoritesContainer;
