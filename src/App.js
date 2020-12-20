import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResults from './containers/SearchResults';
import SearchBar from './containers/SearchBar';
import Nominations from './containers/Nominations';
import GlobalStyle from './styles/GlobalStyle';
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
  // using dictionary for nominations so movie lists can determine nominated titles in O(1)
  // key = imdbID, val = movie JSON
  const [nominations, setNominations] = useState({});
  const [bannerText, setBannerText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');

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
