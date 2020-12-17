import React from 'react';
import Movie from '../components/Movie';

const MovieNominations = ({ movies, removeNominationByID }) => {
  return (
    <div>
      <h3>Nominations</h3>
      <ul>
        {movies.map(m =>
          <li key={m.imdbID}>
            <Movie movie={m}></Movie>
            <button onClick={(e) => removeNominationByID(m.imdbID)}>
              Remove
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MovieNominations;