import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import { MAX_NOMINATIONS } from '../constants';
import movieService from '../services/movies';
import PageNav from './PageNav';

const SearchResultsContainer = styled.div`
  margin-right: 1em;
  padding: 1.5em;
  background-color: white;
  border-radius: 3px;
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
`;

const StyledButton = styled.button`
  padding: 0.4em 0.75em;
`;

const SearchResults = React.memo(({ debouncedSearchText, nominations, setNominations }) => {
  const [pageNum, setPageNum] = useState(-1); // if page num is -1 page nav should be disabled
  const [searchData, setSearchData] = useState({ movies: [], total: 0, error: null });

  // use useCallback here so we can reuse code inside + outside useEffect safely.
  const searchMovies = useCallback(
    (searchText, pageNum) => {
      movieService.search(searchText, pageNum)
        .then(newSearchData => {
          setPageNum(pageNum);
          setSearchData(newSearchData);
        })
        .catch(error => {
          setPageNum(-1);
          setSearchData({ movies: [], total: 0, error: error.message });
        });
    }, [setPageNum, setSearchData]);

  // fetch movies from api when debounced search text changes
  useEffect(() => {
    searchMovies(debouncedSearchText, 1);
  }, [debouncedSearchText]);

  const selectPage = (pageNum) => {
    searchMovies(debouncedSearchText, pageNum);
  };

  const addNomination = (newNomination) => {
    const newNominationIDs = {
      ...nominations,
      [newNomination.imdbID]: newNomination
    };
    setNominations(newNominationIDs);
  };

  const isNominatingDisabled = (movieID) => {
    const isMovieNominated = nominations[movieID] ? true : false;
    const maxMoviesNominated = Object.keys(nominations).length === MAX_NOMINATIONS;
    return isMovieNominated || maxMoviesNominated;
  };

  // declare inside b/c we need closure on nomination fns
  const NominateButton = ({ movie }) => {
    return (
      <StyledButton
        onClick={() => addNomination(movie)}
        disabled={isNominatingDisabled(movie.imdbID)}
      >
        Nominate
      </StyledButton>
    );
  };

  return (
    <SearchResultsContainer>
      <StyledH3>
        {
          debouncedSearchText.length === 0
            ? 'Search for a movie!'
            : `Results for "${debouncedSearchText}"`
        }
      </StyledH3>
      {
        !searchData.error && pageNum !== -1
          ? <PageNav
            pageNum={pageNum}
            pageLength={searchData.movies.length}
            totalResults={searchData.total}
            selectPage={selectPage}
          />
          : null
      }
      <MovieList
        movies={searchData.movies}
        MovieButton={NominateButton}
      />
      {
        searchData.error && searchData.error !== 'Incorrect IMDb ID.'
          ? <p>{searchData.error} Please try another search!</p>
          : null
      }
    </SearchResultsContainer>
  );
});

SearchResults.displayName = 'SearchResults';

export default SearchResults;