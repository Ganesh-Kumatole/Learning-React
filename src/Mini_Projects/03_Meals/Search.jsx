import { useRef } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const meal = inputRef.current?.value.toLowerCase().trim();
    if (!meal) return;
    onSearch(meal);
    inputRef.current.value = '';
  };

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-input"
        placeholder="What kinda meal you like..."
        ref={inputRef}
      />
      <button id="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
