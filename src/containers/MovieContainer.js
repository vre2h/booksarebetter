import { connect } from 'react-redux';
import { addFav, removeFav } from '../actions/favs';
import Movie from '../components/Movie/Movie';

export default connect(
  undefined,
  {
    addFav,
    removeFav,
  }
)(Movie);
