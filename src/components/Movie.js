import React from 'react';

const Movie = ({ movie }) => {
  return (
    <span>
      {movie.Title} ({movie.Year})
    </span>
  );
};

export default Movie;