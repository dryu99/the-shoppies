import React from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';

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

const Nominations = React.memo(({ nominations, setNominations }) => {
  const removeNominationByID = (nominationID) => {
    const newNominationIDs = { ...nominations };
    delete newNominationIDs[nominationID];
    setNominations(newNominationIDs);
  };

  // declare inside b/c we need closure on nomination fns
  const RemoveButton = ({ movie }) => {
    return (
      <StyledButton
        onClick={() => removeNominationByID(movie.imdbID)}
      >
        Remove
      </StyledButton>
    );
  };

  const nominatedMovies = Object.values(nominations);

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

Nominations.displayName = 'Nominations';

export default Nominations;