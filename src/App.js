import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResults from './containers/SearchResults';
import SearchBar from './containers/SearchBar';
import Nominations from './containers/Nominations';
import GlobalStyle from './GlobalStyle';
import Banner from './containers/Banner';
import { MAX_NOMINATIONS } from './constants';

const Content = styled.div`
  padding: 5em 7.5em 0 7.5em;
`;

const Row = styled.div`
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
  const [nominations, setNominations] = useState({}); // key = imdbID, val = movie JSON

  // set banner text when max num of nominations are chosen
  useEffect(() => {
    const maxMoviesNominated = Object.keys(nominations).length === MAX_NOMINATIONS;
    setBannerText(maxMoviesNominated ? 'Max number of nominations selected!' : '');
  }, [nominations]);

  return (
    <>
      <GlobalStyle />
      <Banner text={bannerText}/>
      <Content>
        <SearchBar
          setDebouncedSearchText={setDebouncedSearchText}
        />
        <Row>
          <SearchResults
            debouncedSearchText={debouncedSearchText}
            nominations={nominations}
            setNominations={setNominations}
          />
          <Nominations
            nominations={nominations}
            setNominations={setNominations}
          />
        </Row>
      </Content>
    </>
  );
}

export default App;
