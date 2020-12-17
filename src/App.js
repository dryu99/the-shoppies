import React, { useState } from 'react';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';
import movieService from './services/movies';

function App() {
  // TODO maybe better to keep track of items via dictionary
  const [searchText, setSearchText] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [nominationIDs, setNominationIDs] = useState({}); // key = imdbID, val = movie JSON

  const handleSearchTextChange = (newSearchText) => {
    // update current movie list
    movieService
      .search(newSearchText)
      .then(movies => {
        setMovies(movies);
        setSearchError(null);
      })
      .catch(error => {
        setMovies([]);
        setSearchError(error.message);
      });

    setSearchText(newSearchText);
  };

  const addNomination = (newNomination) => {
    const newNominationIDs = {
      ...nominationIDs,
      [newNomination.imdbID]: newNomination
    };
    setNominationIDs(newNominationIDs);
  };

  const removeNominationByID = (nominationID) => {
    const newNominationIDs = { ...nominationIDs };
    delete newNominationIDs[nominationID];
    setNominationIDs(newNominationIDs);
  };

  const isMovieNominated = (movieID) => {
    return nominationIDs[movieID] ? true : false;
  };

  return (
    <div>
      <h1>The Shoppies</h1>
      <MovieSearchBar
        handleSearchTextChange={handleSearchTextChange}
      />
      <MovieSearchResults
        movies={movies}
        searchText={searchText}
        addNomination={addNomination}
        isMovieNominated={isMovieNominated}
      />
      {searchError ? <div>{searchError}</div> : null}
      <MovieNominations
        movies={Object.values(nominationIDs)}
        removeNominationByID={removeNominationByID}
      />
    </div>
  );
}

export default App;
