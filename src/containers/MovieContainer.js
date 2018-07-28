import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions/favs';
import Movie from '../components/Movie/Movie';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => ({
  isFav: state.favorites.favoriteIds.includes(ownProps.id),
});

mapStateToProps.propTypes = {
  isFav: PropTypes.bool.isRequired,
  addFav: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    addFav,
    removeFav,
  }
)(Movie);
