import React from 'react';
import { useTraceUpdate } from '../hooks';
import movieService from '../services/movies';

const MovieSearchBar = React.memo((props) => {
  const { movies, searchText, setMovies, setError, setSearchText } = props;
  console.log('search bar');
  useTraceUpdate(MovieSearchBar.displayName, props);

  const handleSearchTextChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    // update movie search results
    movieService
      .search(newSearchText)
      .then(movies => {
        setMovies(movies);
        setError(null);
      })
      .catch(error => {
        setMovies(movies.length > 1 ? [] : movies); // avoids rerenders
        setError(error.message);
      });
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