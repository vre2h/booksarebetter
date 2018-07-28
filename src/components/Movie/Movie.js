import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.css';

class Movie extends React.Component {
  static propTypes = {
    addFav: PropTypes.func.isRequired,
    removeFav: PropTypes.func.isRequired,
    isFav: PropTypes.bool.isRequired,
    genresById: PropTypes.object.isRequired,
    movieInfo: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, e) {
    e.preventDefault();

    const { addFav, removeFav, isFav } = this.props;
    const toggler = isFav ? removeFav : addFav;
    toggler(id);
  }

  render() {
    const { movieInfo, genresById, isFav, fromSearch } = this.props;
    const { id, title, genre_ids, poster_path } = movieInfo;
    const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;
    const urlToMovie = fromSearch ? `../movie/${id}` : `movie/${id}`;
    return (
      <Link to={urlToMovie} replace>
        <div className="movie">
          <div className="movie-top-overlay">
            <Button bsSize="small" onClick={this.handleClick.bind(this, id)}>
              {isFav ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="star" />}
            </Button>
          </div>
          <img
            className="movie-img"
            src={imgUrl}
            alt="Sorry, we can't upload!"
          />
          <div className="movie-desc">
            {' '}
            <p className="movie-title">{title}</p>
            <ul className="movie-genres">
              {genre_ids &&
                genre_ids.map(id => (
                  <li className="movie-genres-item" key={id}>
                    <Badge>{genresById[id]}</Badge>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Link>
    );
  }
}

export default Movie;
