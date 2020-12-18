import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const ListItem = styled.li`
  margin: 0.75em;
`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// use 'MovieButton' component prop so movie lists can init any button for each movie.
const MovieList = ({ movies, MovieButton }) => {
  return (
    <ul>
      {movies.map(m =>
        <ListItem key={m.imdbID}>
          <ListItemContainer>
            <Movie movie={m} />
            <MovieButton movie={m}/>
          </ListItemContainer>
        </ListItem>
      )}
    </ul>
  );
};

export default MovieList;