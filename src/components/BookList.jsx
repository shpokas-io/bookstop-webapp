import PropTypes from "prop-types";
import BookCard from "./BookCard";

export default function BookList({ filteredBooks = [], onBookClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No books found</p>
      )}
    </div>
  );
}

BookList.propTypes = {
  filteredBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pictureUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ),
  onBookClick: PropTypes.func.isRequired,
};
