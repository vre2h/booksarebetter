import React from 'react';
import MovieContainer from '../../containers/MovieContainer';
import './styles.css';

const Movies = ({
  movies,
  genresById,
  genreName,
  isFetching,
  fromSearch,
  ...rest
}) => {
  return (
    <div className="movies-wrapper">
      <h1 className="movies-title">{genreName}</h1>
      <div className="movies">
        {movies.length !== 0 || isFetching ? (
          movies.map(movieInfo => {
            return (
              <MovieContainer
                key={movieInfo.id}
                id={movieInfo.id.toString()}
                movieInfo={movieInfo}
                genresById={genresById}
                fromSearch={fromSearch}
                {...rest}
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
