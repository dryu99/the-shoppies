import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(m =>
        <Movie key={m.imdbID} movie={m}/>
      )}
    </ul>
  );
};

export default MovieList;