import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import { MAX_NOMINATIONS } from '../constants';
import { useTraceUpdate } from '../hooks';
import movieService from '../services/movies';

const MAX_PAGE_COUNT = 100;

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

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledH3 = styled.h3`
  margin: 0 0 5px 0;
`;

const StyledButton = styled.button`
  padding: 0.4em 0.75em;
`;

const PageButton = styled.button`
${p =>
    p.selected &&
  `
    color: white;
    background-color: blue;
  `};
`;

const PageRange = ({ pageNum, movies }) => {
  if (pageNum !== -1) {
    const pageLowerBound = (pageNum * 10) - 9;
    const pageUpperBound = ((pageNum - 1) * 10) + movies.length;
    return <span>{pageLowerBound}-{pageUpperBound}</span>;
  } else {
    return null;
  }
};

const PageNav = ({ pageNum, total, movies, selectPage }) => {
  const pageRangeLowerBound = (pageNum * 10) - 9;
  const pageRangeUpperBound = ((pageNum - 1) * 10) + movies.length;

  const lastPageNum = Math.ceil(total / 10);

  const lowerBoundPageNum = pageNum > 2 ? pageNum - 2 : 1;
  const upperBoundPageNum = pageNum + 2 > lastPageNum ? lastPageNum : pageNum + 2;

  const buttonsLength = upperBoundPageNum - lowerBoundPageNum + 1;

  // array with vals 0...buttonsLength
  const buttonsLengthNumList = [...Array(buttonsLength).keys()];

  const prevDisabled = pageNum === 1 || pageNum === -1;
  const nextDisabled = pageNum === lastPageNum || pageNum === -1;

  return (
    <FooterContainer>
      <span>
        {`Showing ${pageRangeLowerBound} to ${pageRangeUpperBound} of ${total} titles`}
      </span>
      <div>
        <button onClick={() => selectPage(1)} disabled={prevDisabled}>
        &lt;
        </button>
        {buttonsLengthNumList.map(n => {
          const buttonNum = n + lowerBoundPageNum;
          return (
            <PageButton
              key={n}
              onClick={() => selectPage(buttonNum)}
              selected={pageNum === buttonNum}
            >
              {buttonNum}
            </PageButton>
          );
        })}
        <button onClick={() => selectPage(lastPageNum)} disabled={nextDisabled}>
        &gt;
        </button>
      </div>
    </FooterContainer>
  );
};

const SearchResults = React.memo(({ debouncedSearchText, nominations, setNominations }) => {
  // useTraceUpdate(SearchResults.displayName, props);
  console.log('search results', debouncedSearchText);

  // if page num is -1 page navigation should be disabled
  const [pageNum, setPageNum] = useState(-1);
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
    },
    [setPageNum, setSearchData],
  );

  // fetch movies from api when debounced search text changes
  useEffect(() => {
    searchMovies(debouncedSearchText, 1);
  }, [debouncedSearchText]);

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

  // declare inside b/c we need to pass fn to MovieList, not an initialized component
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

  const selectPage = (pageNum) => {
    searchMovies(debouncedSearchText, pageNum);
  };

  return (
    <SearchResultsContainer>
      <HeaderContainer>
        <StyledH3>
          {
            debouncedSearchText.length === 0
              ? 'Search for a movie!'
              : `Results for "${debouncedSearchText}"`
          }
        </StyledH3>
        {/* <PageContainer>
          <PageRange pageNum={pageNum} movies={searchData.movies} />
          <PageNav
            pageNum={pageNum}
            movies={searchData.movies}
            total={searchData.total}
            handlePrevPage={() => searchMovies(debouncedSearchText, pageNum - 1)}
            handleNextPage={() => searchMovies(debouncedSearchText, pageNum + 1)}
          />
        </PageContainer> */}
      </HeaderContainer>
      {
        !searchData.error ?
          <FooterContainer>
            <PageNav
              pageNum={pageNum}
              total={searchData.total}
              movies={searchData.movies}
              selectPage={selectPage}
            />
          </FooterContainer>
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