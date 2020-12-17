import React from 'react';
import Movie from '../components/Movie';

const MovieSearchResults = ({ movies, searchText, addNomination }) => {

  return (
    <div>
      <h3>Results for {`"${searchText}"`}</h3>
      <ul>
        {movies.map(m =>
          <li key={m.imdbID}>
            <Movie movie={m}></Movie>
            <button onClick={(e) => addNomination(m)}>
              Nominate
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MovieSearchResults;