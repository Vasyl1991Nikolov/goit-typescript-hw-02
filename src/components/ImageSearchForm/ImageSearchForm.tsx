import React, { useState } from 'react';

interface ImageSearchFormProps {
  onSearch: (query: string) => void;
}

const ImageSearchForm: React.FC<ImageSearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>(''); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for images..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default ImageSearchForm;
