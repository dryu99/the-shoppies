import React from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';
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

const MovieNominations = React.memo((props) => {
  const { nominationIDs, setNominationIDs } = props;
  console.log('nomination');
  useTraceUpdate(MovieNominations.displayName, props);

  const removeNominationByID = (nominationID) => {
    const newNominationIDs = { ...nominationIDs };
    delete newNominationIDs[nominationID];
    setNominationIDs(newNominationIDs);
  };

  const nominatedMovies = Object.values(nominationIDs);

  return (
    <NominationsContainer>
      <StyledH3>Nominations</StyledH3>
      <ul>
        {nominatedMovies.map(m =>
          <li key={m.imdbID}>
            <Movie movie={m}></Movie>
            <button
              onClick={() => removeNominationByID(m.imdbID)}
            >
              Remove
            </button>
          </li>
        )}
      </ul>
    </NominationsContainer>
  );
});

MovieNominations.displayName = 'MovieNominations';

export default MovieNominations;