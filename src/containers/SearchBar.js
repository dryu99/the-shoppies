import React from 'react';

const SearchBar = ({ searchText, handleSearchTextChange }) => {
  return (
    <div>
      <h3>Movie Title</h3>
      <input
        value={searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;