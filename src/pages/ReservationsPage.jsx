import { useEffect, useState } from "react";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(
          "https://bkstapp-7f24cea47b9e.herokuapp.com/api/reservations?userId=123"
        ); // Adjust userId as needed
        if (!response.ok) {
          throw new Error("Failed to fetch reservations");
        }
        const data = await response.json();
        setReservations(data); // Set the state with the fetched reservations
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  // Handle removal of reservations
  const handleRemoveReservation = async (reservationId) => {
    if (window.confirm("Are you sure you want to remove this reservation?")) {
      try {
        const response = await fetch(
          `https://bkstapp-7f24cea47b9e.herokuapp.com/api/reservations/${reservationId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error("Failed to remove reservation:" + errorData.message);
        }
        // Update the reservation state to remove the deleted reservation
        setReservations((prevReservations) =>
          prevReservations.filter(
            (reservation) => reservation.id !== reservationId
          )
        );
      } catch (error) {
        console.error("Error removing reservation:", error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">My Reservations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div
              key={reservation.id} // Use the reservation id for the key
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={reservation.bookPictureUrl} // Use bookPictureUrl from reservation
                alt={reservation.bookName} // Use bookName from reservation
                className="w-32 h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold">{reservation.bookName}</h2>
              <p className="text-gray-500">Days: {reservation.days}</p>
              <p className="text-gray-500">
                Is Audiobook: {reservation.isAudiobook ? "Yes" : "No"}
              </p>
              <p className="text-gray-500">
                Quick Pickup: {reservation.isQuickPickUp ? "Yes" : "No"}
              </p>
              <p className="text-gray-500">
                {/* Display total-cost */}
                {`Total cost: ${reservation.totalCost.toFixed(2)}`}
              </p>
              <button
                onClick={() => handleRemoveReservation(reservation.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Remove reservation
              </button>
            </div>
          ))
        ) : (
          <p>No reservations found</p>
        )}
      </div>
    </div>
  );
}
