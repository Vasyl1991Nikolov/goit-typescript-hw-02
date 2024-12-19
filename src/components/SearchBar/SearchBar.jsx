import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search query!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
