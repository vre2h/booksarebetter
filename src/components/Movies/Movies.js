import React from 'react';

const Movies = ({ movies }) => {
  return movies.map(movie => {
    const imgUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

    return (
      <div key={movie.id}>
        <p>{movie.title}</p>
        <img src={imgUrl} alt="Sorry, we can't upload!" />
      </div>
    );
  });
};

export default Movies;
