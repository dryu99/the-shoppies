import React, { useState } from 'react';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';
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
      <MovieSearchBar handleSearchTextChange={handleSearchTextChange} />
      <MovieSearchResults movies={movies} searchText={searchText}/>
      <MovieNominations movies={[]}/>
    </div>
  );
}

export default App;
