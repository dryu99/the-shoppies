import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';
import GlobalStyle from './GlobalStyle';
import Banner from './containers/Banner';

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
  const [searchText, setSearchText] = useState('');
  const [bannerText, setBannerText] = useState('');
  const [nominationIDs, setNominationIDs] = useState({}); // key = imdbID, val = movie JSON

  useEffect(() => {
    const maxMoviesNominated = Object.keys(nominationIDs).length === 5;
    setBannerText(maxMoviesNominated ? 'Max number of nominations selected!' : '');
  }, [nominationIDs]);

  return (
    <>
      <GlobalStyle />
      <Banner text={bannerText}/>
      <Content>
        <MovieSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <MovieListRow>
          <MovieSearchResults
            searchText={searchText}
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
