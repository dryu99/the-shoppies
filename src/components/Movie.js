import React from 'react';

const Movie = ({ movie, button }) => {
  return (
    <li>
      {movie.Title} ({movie.Year})
    </li>
  );
};

export default Movie;