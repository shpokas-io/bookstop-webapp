import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function HomePage() {
  // States that hold the list of books and search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [reservations, setReservations] = useState([]); //State for reservations
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("Book");
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedQuickPickup, setSelectedQuickPickup] = useState(false);

  //Fetch books from backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5063/api/books");
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
  //Open the modal window when modal is clicked
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  //Handle book reservation
  const handleReserve = async () => {
    const reservationData = {
      bookId: selectedBook.id,
      userId: "123",
      isAudiobook: selectedType === "Audiobook",
      days: selectedDuration,
      isQuickPickUp: selectedQuickPickup,
      bookName: selectedBook.name,
      bookPictureUrl: selectedBook.pictureUrl,
    };

    console.log("Reservation Data:", reservationData);

    try {
      const response = await fetch("http://localhost:5063/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
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
          reservationData,
        ]);

        // CLose the modal after reserving
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error reserving book:", error);
    }
  };

  return (
    <div>
      {/* Search input */}
      <div className="p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search books"
          className="w-full p-2 border border-gray-300 rounded"
        ></input>
      </div>

      {/* Book cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => handleBookClick(book)}
            />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>

      {/* Modal for reservation */}

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl mb-4 font-bold">{selectedBook.name}</h3>

            {/* Book type selection */}
            <div className="mb-4">
              <label>Type:</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="ml-2 border border-gray-300 rounded"
              >
                <option value="Book">Book</option>
                <option value="Audiobook">Audiobook</option>
              </select>
            </div>
            {/* DUration selection */}
            <div className="mb-4">
              <label>Duration (days):</label>
              <input
                type="number"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(Number(e.target.value))}
                min="1"
                className="ml-2 border border-gray-300 rounded w-16"
              />
            </div>

            {/* Quick pickup option */}
            <div className="mb-4">
              <label>
                Quick Pickup:
                <input
                  type="checkbox"
                  checked={selectedQuickPickup}
                  onChange={(e) => setSelectedQuickPickup(e.target.checked)}
                  className="ml-2"
                />
              </label>
            </div>

            {/* COnfirm and Cancel modal */}
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleReserve(selectedBook)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
