import React from 'react';
import Movie from '../components/Movie';
import { useTraceUpdate } from '../hooks';

const MovieNominations = React.memo((props) => {
  const { nominationIDs, setNominationIDs } = props;
  console.log('nomination');
  // useTraceUpdate(MovieNominations.displayName, props);

  const removeNominationByID = (nominationID) => {
    const newNominationIDs = { ...nominationIDs };
    delete newNominationIDs[nominationID];
    setNominationIDs(newNominationIDs);
  };

  const nominatedMovies = Object.values(nominationIDs);

  return (
    <div>
      <h3>Nominations</h3>
      <ul>
        {nominatedMovies.map(m =>
          <li key={m.imdbID}>
            <Movie movie={m}></Movie>
            <button
              onClick={(e) => removeNominationByID(m.imdbID)}
            >
              Remove
            </button>
          </li>
        )}
      </ul>
    </div>
  );
});

MovieNominations.displayName = 'MovieNominations';

export default MovieNominations;