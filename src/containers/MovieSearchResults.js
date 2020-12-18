import React from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
import { useTraceUpdate } from '../hooks';

const SearchResultsContainer = styled.div`
  margin-right: 1em;
  padding: 1.5em;
  background-color: white;
  border-radius: 3px;
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
`;

const MovieSearchResults = React.memo((props) => {
  console.log('search results');
  const { movies, searchText, error, nominationIDs, setNominationIDs } = props;
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
    <SearchResultsContainer>
      <StyledH3>Results for {`"${searchText}"`}</StyledH3>
      {!error ?
        <ul>
          {movies.map(m =>
            <li key={m.imdbID}>
              <Movie movie={m}></Movie>
              <button
                onClick={() => addNomination(m)}
                disabled={isMovieNominated(m.imdbID)}
              >
                Nominate
              </button>
            </li>
          )}
        </ul>
        :
        <p>{error}</p>
      }
    </SearchResultsContainer>
  );
});

MovieSearchResults.displayName = 'MovieSearchResults';

export default MovieSearchResults;