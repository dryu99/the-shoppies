import React from 'react';
import styled from 'styled-components';
import { Card, ListItemButton } from '../styles/Common';
import MovieList from '../components/MovieList';

const NominationsCard = styled(Card)`
  margin-left: 1em;
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
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
      <ListItemButton
        onClick={() => removeNominationByID(movie.imdbID)}
      >
        Remove
      </ListItemButton>
    );
  };

  const nominatedMovies = Object.values(nominations);

  return (
    <NominationsCard>
      <StyledH3>Nominations</StyledH3>
      <MovieList
        movies={nominatedMovies}
        MovieButton={RemoveButton}
      />
    </NominationsCard>
  );
});

Nominations.displayName = 'Nominations';

export default Nominations;