import React from 'react';
import Movie from '../Movie';
import './styles.css';

const Movies = ({ movies, genresById, genreName, isFetching }) => {
  return (
    <div className="movies-wrapper">
      <h1 className="movies-title">{genreName}</h1>
      <div className="movies">
        {movies.length !== 0 || isFetching ? (
          movies.map(movieInfo => {
            return (
              <Movie
                key={movieInfo.id}
                movieInfo={movieInfo}
                genresById={genresById}
              />
            );
          })
        ) : (
          <h3>
            <strong>Holy guacamole!</strong> There is no post with your input!
          </h3>
        )}
      </div>
      {isFetching ? <h2>Loading..</h2> : ''}
    </div>
  );
};

export default Movies;
