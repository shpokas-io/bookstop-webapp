import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import ReservationModal from "../components/ReservationModal";
import { fetchBooks, createReservation } from "../services/api";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBooks(
      books.filter((book) => book.name.toLowerCase().includes(query))
    );
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleReserve = async (reservationData) => {
    try {
      await createReservation(reservationData);
      alert("Reservation successful!");
      setShowModal(false);
    } catch (error) {
      console.error("Error creating reservation:" + error.message);
    }
  };

  return (
    <div>
      <SearchInput searchQuery={searchQuery} onSearch={handleSearch} />
      <BookList filteredBooks={filteredBooks} onBookClick={handleBookClick} />
      {showModal && selectedBook && (
        <ReservationModal
          selectedBook={selectedBook}
          onClose={() => setShowModal(false)}
          onReserve={handleReserve}
        />
      )}
    </div>
  );
}
