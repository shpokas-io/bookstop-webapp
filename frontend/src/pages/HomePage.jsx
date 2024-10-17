/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList";
import ReservationModal from "../components/ReservationModal";

export default function HomePage() {
  // States that hold the list of books and search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [reservations, setReservations] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // const [selectedType, setSelectedType] = useState("Book");
  // const [selectedDuration, setSelectedDuration] = useState(1);
  // const [selectedQuickPickup, setSelectedQuickPickup] = useState(false);

  //Fetch books from backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://bkstapp-7f24cea47b9e.herokuapp.com/api/books"
        );
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); //Initialize the filtered books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  //Filtered books based on search query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = books.filter((book) =>
      book.name.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  //Open the modal window when book is clicked
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  //Handle book reservation
  const handleReserve = async (reservationData) => {
    try {
      const response = await fetch(
        "https://bkstapp-7f24cea47b9e.herokuapp.com/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData.errors);
        alert("Error creating reservation:" + JSON.stringify(errorData.errors));
      } else {
        const result = await response.json();
        console.log("REservation successful:", result);

        //Add the reservation to the state
        setReservations((prevReservations) => [
          ...prevReservations,
          { ...reservationData, id: result.id, totalCost: result.totalCost },
        ]);

        //Close the modal after reserving is done
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error reserving book:", error);
    }
  };

  return (
    <div>
      <SearchInput searchQuery={searchQuery} onSearch={handleSearch} />
      <BookList filteredBooks={filteredBooks} onBookClick={handleBookClick} />
      {/* Modal for reservation */}
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
