import React, { useState } from 'react';
import Movies from './containers/Movies';
import SearchBar from './containers/SearchBar';
import movieService from './services/movies';

function App() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  // const [nominations, setNominations] = useState([]);

  const handleSearchTextChange = (newSearchText) => {
    // update current movie list
    movieService
      .getMoviesBySearch(newSearchText)
      .then(movies => {
        setMovies(movies);
      });

    setSearchText(newSearchText);
  };

  return (
    <div>
      <h1>The Shoppies</h1>
      <SearchBar handleSearchTextChange={handleSearchTextChange} />
      <Movies movies={movies} searchText={searchText}/>
    </div>
  );
}

export default App;
