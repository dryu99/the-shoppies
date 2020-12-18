import React from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
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

const StyledButton = styled.button`
  padding: 0.4em 0.75em;
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

  const NominateButton = ({ movie }) => {
    return (
      <StyledButton
        onClick={() => addNomination(movie)}
        disabled={isMovieNominated(movie.imdbID)}
      >
        Nominate
      </StyledButton>
    );
  };

  return (
    <SearchResultsContainer>
      <StyledH3>{searchText.length === 0 ? 'Search up a movie!' : `Results for "${searchText}"`}</StyledH3>
      {!error ?
        <MovieList
          movies={movies}
          MovieButton={NominateButton}
        />
        :
        <p>{error}</p>
      }
    </SearchResultsContainer>
  );
});

MovieSearchResults.displayName = 'MovieSearchResults';

export default MovieSearchResults;