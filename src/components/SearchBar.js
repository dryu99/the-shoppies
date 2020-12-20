import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MagnifyingGlassIcon from '../assets/magnifying-glass.svg';
import { Card } from '../styles/Common';

const SearchCard = styled(Card)`
  margin-bottom: 2em;
`;

const StyledH4 = styled.h4`
  margin: 0 0 5px 0;
`;

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #bbbbbb;
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
    <SearchCard>
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
    </SearchCard>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;