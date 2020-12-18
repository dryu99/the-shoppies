import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import { useTraceUpdate } from '../hooks';
import movieService from '../services/movies';

const SearchResultsContainer = styled.div`
  margin-right: 1em;
  padding: 1.5em;
  background-color: white;
  border-radius: 3px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
`;

const StyledButton = styled.button`
  padding: 0.4em 0.75em;
`;

const MovieSearchResults = React.memo((props) => {
  console.log('search results');
  const { searchText, nominationIDs, setNominationIDs } = props;
  // useTraceUpdate(MovieSearchResults.displayName, props);

  const [pageNum, setPageNum] = useState(1);
  const [{ movies, error }, setSearchData] = useState({ movies: [], error: null });

  // update search results when search text changes
  useEffect(() => {
    movieService.search(searchText)
      .then(movies => {
        setSearchData({ movies, error: null });
      })
      .catch(error => {
        setSearchData({
          movies: movies.length > 1 ? [] : movies, // condition exists to avoid rerenders
          error: error.message
        });
      });
  }, [searchText, setSearchData]);

  const addNomination = (newNomination) => {
    const newNominationIDs = {
      ...nominationIDs,
      [newNomination.imdbID]: newNomination
    };
    setNominationIDs(newNominationIDs);
  };

  const isMovieNominated = (movieID) => {
    return nominationIDs[movieID] ? true : false;
  };

  const NominateButton = ({ movie }) => {
    return (
      <StyledButton
        onClick={() => addNomination(movie)}
        disabled={isMovieNominated(movie.imdbID)}
      >
        Nominate
      </StyledButton>
    );
  };

  // TODO dont show weird msg
  return (
    <SearchResultsContainer>
      <HeaderContainer>
        <StyledH3>{searchText.length === 0 ? 'Search up a movie!' : `Results for "${searchText}"`}</StyledH3>
        <div>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </HeaderContainer>
      <MovieList
        movies={movies}
        MovieButton={NominateButton}
      />
      {error !== 'Incorrect IMDb ID.' ? error : null}
    </SearchResultsContainer>
  );
});

MovieSearchResults.displayName = 'MovieSearchResults';

export default MovieSearchResults;