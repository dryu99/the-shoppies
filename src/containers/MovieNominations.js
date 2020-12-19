import React from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import { useTraceUpdate } from '../hooks';

const NominationsContainer = styled.div`
  margin-left: 1em;
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

const MovieNominations = React.memo(({ nominationIDs, setNominationIDs }) => {
  console.log('nomination');

  const removeNominationByID = (nominationID) => {
    const newNominationIDs = { ...nominationIDs };
    delete newNominationIDs[nominationID];
    setNominationIDs(newNominationIDs);
  };

  const RemoveButton = ({ movie }) => {
    return (
      <StyledButton
        onClick={() => removeNominationByID(movie.imdbID)}
      >
        Remove
      </StyledButton>
    );
  };

  const nominatedMovies = Object.values(nominationIDs);

  return (
    <NominationsContainer>
      <StyledH3>Nominations</StyledH3>
      <MovieList
        movies={nominatedMovies}
        MovieButton={RemoveButton}
      />
    </NominationsContainer>
  );
});

MovieNominations.displayName = 'MovieNominations';

export default MovieNominations;