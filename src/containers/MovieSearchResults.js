import React from 'react';
import Movie from '../components/Movie';

const MovieSearchResults = ({ movies, searchText }) => {
  return (
    <div>
      <h3>Results for {`"${searchText}"`}</h3>
      <ul>
        {movies.map(m =>
          <Movie key={m.imdbID} movie={m}/>
        )}
      </ul>
    </div>
  );
};

export default MovieSearchResults;