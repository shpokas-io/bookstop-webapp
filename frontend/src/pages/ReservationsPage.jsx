import { useEffect } from "react";
import { useState } from "react";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const reservedBooks =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(reservedBooks);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">My Reservations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {reservations.length > 0 ? (
          reservations.map((book) => (
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
            </div>
          ))
        ) : (
          <p>No reservations found</p>
        )}
      </div>
    </div>
  );
}
