import { useEffect, useState } from "react";
export default function HomePage() {
  // States that hold the list of books and search query
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [reservations, setReservations] = useState([]); //State for reservations
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
  const handleReserve = (book) => {
    setReservations((prev) => {
      const newReservations = [...prev, book];
      localStorage.setItem("reservations", JSON.stringify(newReservations));
      return newReservations;
    });
    alert(`${book.name} reserved successfully!`);
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
            <div
              key={book.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={book.pictureUrl}
                alt={book.name}
                className="w-32 h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">{book.name}</h2>
              <p className="text-gray-500">Release Date: {book.year}</p>

              {/* rsrv bttn */}
              <button
                onClick={() => handleReserve(book)} //Reserve book
                className="mt-2 bg-blue-500 text-white p-2 rounded"
              >
                Reserve book
              </button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}
