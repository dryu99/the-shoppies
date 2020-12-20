import React from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
  margin-right: 0.75em;
`;

const Movie = ({ movie }) => {
  return (
    <MovieContainer>
      {movie.Title} ({movie.Year})
    </MovieContainer>
  );
};

export default Movie;