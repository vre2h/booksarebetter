import React from 'react';
import Movie from '../Movie';
const Movies = ({ movies, genresById }) => {
  return (
    <div className="movies-wrapper">
      {' '}
      {movies.map(movieInfo => {
        return <Movie movieInfo={movieInfo} genresById={genresById} />;
      })}
    </div>
  );
};

export default Movies;
