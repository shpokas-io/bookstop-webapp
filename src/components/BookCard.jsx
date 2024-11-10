import PropTypes from "prop-types";
import Card from "./ui/Card";
export default function BookCard({ book, onClick }) {
  return (
    <Card
      image={{ src: book.pictureUrl, alt: book.name }}
      title={book.name}
      onClick={onClick}
      className="cursor-pointer"
    >
      <p className="text-gray-500">Release Date: {book.year}</p>
    </Card>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pictureUrl: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
