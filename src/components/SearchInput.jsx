import PropTypes from "prop-types";

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

SearchInput.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
