import React from 'react';
import { useTraceUpdate } from '../hooks';
import movieService from '../services/movies';

const MovieSearchBar = React.memo((props) => {
  const { movies, searchText, setMovies, setSearchError, setSearchText } = props;
  console.log('search bar');
  // useTraceUpdate(MovieSearchBar.displayName, props);

  const handleSearchTextChange = (e) => {
    const newSearchText = e.target.value;

    // update movie search results
    movieService
      .search(newSearchText)
      .then(movies => {
        setMovies(movies);
        setSearchError(null);
      })
      .catch(error => {
        setMovies(movies.length > 1 ? [] : movies); // avoids rerenders
        setSearchError(error.message);
      });

    setSearchText(newSearchText);
  };

  return (
    <div>
      <h3>Movie Title</h3>
      <input
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </div>
  );
});

MovieSearchBar.displayName = 'MovieSearchBar';

export default MovieSearchBar;