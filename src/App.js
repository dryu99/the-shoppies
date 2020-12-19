import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';
import GlobalStyle from './GlobalStyle';
import Banner from './containers/Banner';
import { MAX_NOMINATIONS } from './constants';

const Content = styled.div`
  padding: 5em 7.5em 0 7.5em;
`;

const MovieListRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  & > div {
    flex: 1;
  }
`;

function App() {
  const [bannerText, setBannerText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const [nominationIDs, setNominationIDs] = useState({}); // key = imdbID, val = movie JSON

  useEffect(() => {
    const maxMoviesNominated = Object.keys(nominationIDs).length === MAX_NOMINATIONS;
    setBannerText(maxMoviesNominated ? 'Max number of nominations selected!' : '');
  }, [nominationIDs]);

  return (
    <>
      <GlobalStyle />
      <Banner text={bannerText}/>
      <Content>
        <MovieSearchBar
          setDebouncedSearchText={setDebouncedSearchText}
        />
        <MovieListRow>
          <MovieSearchResults
            debouncedSearchText={debouncedSearchText}
            nominationIDs={nominationIDs}
            setNominationIDs={setNominationIDs}
          />
          <MovieNominations
            nominationIDs={nominationIDs}
            setNominationIDs={setNominationIDs}
          />
        </MovieListRow>
      </Content>
    </>
  );
}

export default App;
