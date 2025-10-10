import React from 'react';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [isInput, setIsInput] = useState(false);

  const closeInput = (e) => {
    if (e.target.className != 'search-input') {
      setIsInput(false);
    }
  };

  const openInput = (e) => {
    e.stopPropagation();
    setIsInput(true);
  };

  return (
    <div className="search-container" onClick={closeInput}>
      {isInput ? (
        <input
          className="search-input"
          type="text"
          placeholder="Search for..."
        />
      ) : (
        <FcSearch onClick={openInput} />
      )}
    </div>
  );
};

export default SearchBar;
