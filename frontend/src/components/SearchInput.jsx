import React from "react";

const SearchInput = ({ searchQuery, onSearch }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearch}
        placeholder="Search books"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchInput;
