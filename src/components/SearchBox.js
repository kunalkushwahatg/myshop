
import React from 'react';

const SearchBox = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  );
};

export default SearchBox;
