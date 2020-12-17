import React from 'react';
import Movie from '../components/Movie';

const MovieSearchResults = ({ movies, searchText, addNomination, isMovieNominated }) => {
  return (
    <div>
      <h3>Results for {`"${searchText}"`}</h3>
      <ul>
        {movies.map(m => {
          return (
            <li key={m.imdbID}>
              <Movie movie={m}></Movie>
              <button
                onClick={(e) => addNomination(m)}
                disabled={isMovieNominated(m.imdbID)}
              >
                Nominate
              </button>
            </li>
          );
        }
        )}
      </ul>
    </div>
  );
};

export default MovieSearchResults;