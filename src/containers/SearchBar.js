import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTraceUpdate } from '../hooks';
import MagnifyingGlassIcon from '../assets/magnifying-glass.svg';

const SearchContainer = styled.div`
  margin-bottom: 2em;
  padding: 1.5em;
  background-color: white;
  border-radius: 3px;
`;

const StyledH4 = styled.h4`
  margin: 0 0 5px 0;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const SearchImage = styled.img`
  margin: 0.75em;
  width: 17.5px;
  height: 17.5px;
  opacity: 0.5;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 2em;
  font-size: 1em;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchBar = React.memo(({ setDebouncedSearchText }) => {
  const [searchText, setSearchText] = useState('');
  console.log('search bar');

  // debounce search text changes to avoid repetitive api calls
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => {
      // unsubscribe
      clearTimeout(debounce);
    };
  }, [searchText]);

  return (
    <SearchContainer>
      <StyledH4>Movie Title</StyledH4>
      <SearchInputContainer>
        <SearchImage
          src={MagnifyingGlassIcon}
          alt="Magnifying Glass"
        />
        <SearchInput
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </SearchInputContainer>
    </SearchContainer>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;