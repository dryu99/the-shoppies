import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import { useTraceUpdate } from '../hooks';
import movieService from '../services/movies';

const MAX_PAGE_COUNT = 100;
const MAX_MOVIES_COUNT = 10;

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

const PageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  & > div {
    margin: 0 0.75em;  
  }
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
`;

const StyledButton = styled.button`
  padding: 0.4em 0.75em;
`;

const PageRange = ({ pageNum, movies }) => {
  const currPageRange = pageNum !== -1
    ? `${(pageNum * 10) - 9}-${((pageNum - 1) * 10) + movies.length}`
    : null;

  return currPageRange
    ? <span>{currPageRange}</span>
    : null;
};

const PageButtonGroup = ({ pageNum, movies, handlePrevPage, handleNextPage }) => {
  return (
    <div>
      <button
        onClick={handlePrevPage}
        disabled={pageNum === 1 || pageNum === -1}
      >
        {'<'}
      </button>
      <button
        onClick={handleNextPage}
        disabled={pageNum === MAX_PAGE_COUNT || movies.length < MAX_MOVIES_COUNT || pageNum === -1}
      >
        {'>'}
      </button>
    </div>
  );
};

const MovieSearchResults = React.memo((props) => {
  const { searchText, nominationIDs, setNominationIDs } = props;
  useTraceUpdate(MovieSearchResults.displayName, props);
  console.log('search results', searchText);

  // if page num is -1 sth went wrong, page navigation should be disabled
  const [pageNum, setPageNum] = useState(1);
  const [{ movies, error }, setSearchData] = useState({ movies: [], error: null });

  // use useCallback here so we can reuse code inside + outside useEffect safely.
  const searchMovies = useCallback(
    (searchText, pageNum) => {
      movieService.search(searchText, pageNum)
        .then(newMovies => {
          setPageNum(pageNum);
          setSearchData({ movies: newMovies, error: null });
        })
        .catch(error => {
          setPageNum(-1);
          setSearchData({ movies: [], error: error.message });
        });
    },
    [setPageNum, setSearchData],
  );

  // update search results when search text changes
  useEffect(() => {
    searchMovies(searchText, 1);
  }, [searchText]);

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

  // declare inside b/c we need to pass fn to MovieList, not an initialized component
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

  return (
    <SearchResultsContainer>
      <HeaderContainer>
        <StyledH3>
          {searchText.length === 0 ? 'Search up a movie!' : `Results for "${searchText}"`}
        </StyledH3>
        <PageContainer>
          <PageRange pageNum={pageNum} movies={movies}/>
          <PageButtonGroup
            pageNum={pageNum}
            movies={movies}
            handlePrevPage={() => searchMovies(searchText, pageNum - 1)}
            handleNextPage={() => searchMovies(searchText, pageNum + 1)}
          />
        </PageContainer>
      </HeaderContainer>
      <MovieList
        movies={movies}
        MovieButton={NominateButton}
      />
      {error !== 'Incorrect IMDb ID.' ? <p>{error}</p> : null}
    </SearchResultsContainer>
  );
});

MovieSearchResults.displayName = 'MovieSearchResults';

export default MovieSearchResults;