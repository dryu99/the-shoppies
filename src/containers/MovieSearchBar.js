import React from 'react';
import styled from 'styled-components';
import { useTraceUpdate } from '../hooks';

const SearchContainer = styled.div`
  margin-bottom: 2em;
  padding: 1.5em;
  background-color: white;
  border-radius: 3px;
`;

const StyledH4 = styled.h4`
  margin: 0 0 5px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 2em;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

const MovieSearchBar = React.memo((props) => {
  const { searchText, setSearchText } = props;
  console.log('search bar');
  useTraceUpdate(MovieSearchBar.displayName, props);

  const handleSearchTextChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
  };

  return (
    <SearchContainer>
      <StyledH4>Movie Title</StyledH4>
      <SearchInput
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </SearchContainer>
  );
});

MovieSearchBar.displayName = 'MovieSearchBar';

export default MovieSearchBar;