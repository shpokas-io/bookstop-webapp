import PropTypes from "prop-types";

export default function BookCard({ book, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer "
      onClick={onClick}
      role="button" //Indicate that this button clickable
      tabIndex={0} //Make it focusable for keyboard navigation
    >
      <img
        src={book.pictureUrl}
        alt={book.name}
        className="w-32 h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{book.name}</h2>
      <p className="text-gray-500">Release Date: {book.year}</p>
    </div>
  );
}

//Defined prop types for better documentation and error checking
BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pictureUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
