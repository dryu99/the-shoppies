import React, { useState } from 'react';
import styled from 'styled-components';
import MovieSearchResults from './containers/MovieSearchResults';
import MovieSearchBar from './containers/MovieSearchBar';
import MovieNominations from './containers/MovieNominations';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  padding: 0 7.5em 0 7.5em;
`;

const ContentContainer = styled.div`
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
  const [nominationIDs, setNominationIDs] = useState({}); // key = imdbID, val = movie JSON

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1>The Shoppies</h1>
        <MovieSearchBar
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <ContentContainer>
          <MovieSearchResults
            searchText={searchText}
            nominationIDs={nominationIDs}
            setNominationIDs={setNominationIDs}
          />
          <MovieNominations
            nominationIDs={nominationIDs}
            setNominationIDs={setNominationIDs}
          />
        </ContentContainer>
      </AppContainer>
    </>
  );
}

export default App;
