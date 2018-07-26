import React from 'react';
import { Badge } from 'react-bootstrap';
import './styles.css';

const Movie = props => {
  const { movieInfo, genresById } = props;
  const { id, title, genre_ids, poster_path } = movieInfo;
  const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;

  return (
    <div key={id} className="movie">
      <div className="movie-shadow" />
      <img className="movie-img" src={imgUrl} alt="Sorry, we can't upload!" />
      <div className="movie-desc">
        {' '}
        <p className="movie-title">{title}</p>
        <ul className="movie-genres">
          {genre_ids.map(id => (
            <li className="movie-genres-item" key={id}>
              <Badge>{genresById[id]}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
