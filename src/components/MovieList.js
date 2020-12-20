import React from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const List = styled.ul`
  padding-left: 2em;
`;

const ListItem = styled.li`
  margin: 0.75em;
`;

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

// pass 'MovieButton' component prop to let movie lists use any button.
const MovieList = ({ movies, MovieButton }) => {
  return (
    <List>
      {movies.map(m =>
        <ListItem key={m.imdbID}>
          <ListItemContainer>
            <Movie movie={m} />
            <MovieButton movie={m}/>
          </ListItemContainer>
        </ListItem>
      )}
    </List>
  );
};

export default MovieList;