import PropTypes from "prop-types";

export default function BookCard({ book, handleReserve }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={book.pictureUrl}
        alt={book.name}
        className="w-32 h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{book.name}</h2>
      <p className="text-gray-500">Release Date: {book.year}</p>

      {/* Reserve button */}
      <button
        onClick={() => handleReserve(book)} // Reserve book
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Reserve book
      </button>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pictureUrl: PropTypes.string.isRequired,
  }).isRequired,
  handleReserve: PropTypes.func.isRequired,
};
