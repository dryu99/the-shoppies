import React from 'react';

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map(m =>
        <div key={m.imdbID}>
          {m.Title}
        </div>
      )}
    </div>
  );
};

export default Movies;