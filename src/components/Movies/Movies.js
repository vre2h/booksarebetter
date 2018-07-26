import React from 'react';
import Movie from '../Movie';
import './styles.css';

const Movies = ({ movies, genresById, genreName }) => {
  return (
    <div className="movies-wrapper">
      <h1 className="movies-title">{genreName}</h1>{' '}
      <div className="movies">
        {movies.map(movieInfo => {
          return (
            <Movie
              key={movieInfo.id}
              movieInfo={movieInfo}
              genresById={genresById}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
