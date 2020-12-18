import React, { useState } from 'react';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [nominationIDs, setNominationIDs] = useState({}); // key = imdbID, val = movie JSON

  return (
    <div>
      <h1>The Shoppies</h1>
      <MovieSearchBar
        movies={movies}
        searchText={searchText}
        setMovies={setMovies}
        setSearchText={setSearchText}
        setSearchError={setSearchError}
      />
      <MovieSearchResults
        movies={movies}
        searchText={searchText}
        searchError={searchError}
        nominationIDs={nominationIDs}
        setNominationIDs={setNominationIDs}
      />
      {/* {searchError ? <div>{searchError}</div> : null} */}
      <MovieNominations
        nominationIDs={nominationIDs}
        setNominationIDs={setNominationIDs}
      />
    </div>
  );
}

export default App;
