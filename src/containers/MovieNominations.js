import React from 'react';
import Movie from '../components/Movie';

const MovieNominations = ({ movies }) => {
  return (
    <div>
      <h3>Nominations</h3>
      <ul>
        {movies.map(m =>
          <Movie key={m.imdbID} movie={m}/>
        )}
      </ul>
    </div>
  );
};

export default MovieNominations;