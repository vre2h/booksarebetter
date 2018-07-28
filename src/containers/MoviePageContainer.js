import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/moviePage';
import MoviePage from '../components/MoviePage';
import { addFav, removeFav } from '../actions/favs';
import PropTypes from 'prop-types';

class MoviePageContainer extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchData } = this.props;

    fetchData(id);
  }

  static propTypes = {
    addFav: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired,
    favs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

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
