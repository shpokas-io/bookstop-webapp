import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function HomePage() {
  // States that hold the list of books and search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [reservations, setReservations] = useState([]); //State for reservations

  //Aditional state for reservation details
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

  //Handle book reservation
  const handleReserve = async (book) => {
    const reservationData = {
      bookId: book.id,
      userId: "123",
      isAudiobook: book.isAudiobook,
      days: 1,
      isQuickPickUp: false,
      bookName: book.name,
      bookPictureUrl: book.pictureUrl,
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
      {/* Book type selection */}
      <div className="p-4">
        <label>
          type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="ml-2 border border-gray-300 rounded"
          >
            <option value="Book">Book</option>
            <option value="Audiobook">AdioBook</option>
          </select>
        </label>
      </div>
      {/* Duration selection */}
      <div className="p-4">
        <label>
          Duration(days):
          <input
            type="number"
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(Number(e.target.value))}
            min="1"
            className="ml-2 border border-gray-300 rounded w-16"
          />
        </label>
      </div>
      {/* Quick pickup option */}
      <div className="p-4">
        <label>
          Quick Pickup:
          <input
            type="checkbox"
            value={selectedQuickPickup}
            onChange={(e) => setSelectedQuickPickup(e.target.value)}
            className="ml-2"
          />
        </label>
      </div>

      {/* Book cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} handleReserve={handleReserve} />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}
