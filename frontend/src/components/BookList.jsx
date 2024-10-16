/* eslint-disable react/prop-types */

import BookCard from "./BookCard";

export default function BookList({ filteredBooks, onBookClick }) {
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
        <p>No books found</p>
      )}
    </div>
  );
}
