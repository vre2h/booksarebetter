import React from 'react';
import { connect } from 'react-redux';
import Movies from '../components/Movies/Movies';
import { fetchFavMovies } from '../actions/favs';
import { addFav, removeFav } from '../actions/favs';
import moviesSelector from '../selectors/favoriteMovies';

class FavoritesContainer extends React.Component {
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
  movies: moviesSelector(state) || [],
  favoriteIds: state.favorites.favoriteIds,
  genresById: state.moviesInfo.genresById || [],
  genreName: 'favorites'.toUpperCase(),
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
