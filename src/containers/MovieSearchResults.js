import React from 'react';
import Movie from '../components/Movie';
import { useTraceUpdate } from '../hooks';

const MovieSearchResults = React.memo((props) => {
  console.log('search results');
  const { movies, searchText, searchError, nominationIDs, setNominationIDs } = props;
  useTraceUpdate(MovieSearchResults.displayName, props);

  const addNomination = (newNomination) => {
    const newNominationIDs = {
      ...nominationIDs,
      [newNomination.imdbID]: newNomination
    };
    setNominationIDs(newNominationIDs);
  };

  const isMovieNominated = (movieID) => {
    return nominationIDs[movieID] ? true : false;
  };

  return (
    <div>
      <h3>Results for {`"${searchText}"`}</h3>
      {!searchError ?
        <ul>
          {movies.map(m =>
            <li key={m.imdbID}>
              <Movie movie={m}></Movie>
              <button
                onClick={(e) => addNomination(m)}
                disabled={isMovieNominated(m.imdbID)}
              >
                Nominate
              </button>
            </li>
          )}
        </ul>
        :
        <p>{searchError}</p>
      }
    </div>
  );
});

MovieSearchResults.displayName = 'MovieSearchResults';

export default MovieSearchResults;