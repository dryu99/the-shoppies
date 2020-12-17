import React from 'react';

const Movies = ({ movies, searchText }) => {
  return (
    <div>
      <h3>Results for {`"${searchText}"`}</h3>
      <ul>
        {movies.map(m =>
          <li key={m.imdbID}>
            {m.Title} ({m.Year})
          </li>
        )}
      </ul>
    </div>
  );
};

export default Movies;