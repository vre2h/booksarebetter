import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions/favs';
import Movie from '../components/Movie/Movie';

const mapStateToProps = (state, ownProps) => ({
  isFav: state.favorites.favoriteIds.includes(ownProps.id),
});

export default connect(
  mapStateToProps,
  {
    addFav,
    removeFav,
  }
)(Movie);
