import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-4 flex">
      <input
        type="text"
        placeholder="Search for music, artists..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 flex-grow"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
