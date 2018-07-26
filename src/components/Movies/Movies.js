import React from 'react';

const Movies = ({ movies, genresById }) => {
  return movies.map(({ id, title, genre_ids, poster_path }) => {
    const imgUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;

    return (
      <div key={id}>
        <p>{title}</p>
        <img src={imgUrl} alt="Sorry, we can't upload!" />
        <ul>{genre_ids.map(id => <li>{genresById[id]}</li>)}</ul>
      </div>
    );
  });
};

export default Movies;
