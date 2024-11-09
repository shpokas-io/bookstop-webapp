import { useEffect, useState } from "react";
import ReservationCard from "../components/ReservationCard";
import { fetchReservations, removeReservation } from "../services/api";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const userId = "123";

  useEffect(() => {
    const getReservations = async () => {
      try {
        const data = await fetchReservations(userId);
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    getReservations();
  }, []);

  const handleRemoveReservation = async (reservationId) => {
    if (window.confirm("Are you sure you want to remove this reservation?")) {
      try {
        await removeReservation(reservationId);
        setReservations((prevReservations) =>
          prevReservations.filter(
            (reservation) => reservation.id !== reservationId
          )
        );
      } catch (error) {
        console.error("Error removing reservation:", error);
        alert("Failed to remove reservation.");
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">My Reservations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              onRemove={() => handleRemoveReservation(reservation.id)}
            />
          ))
        ) : (
          <p>No reservations found</p>
        )}
      </div>
    </div>
  );
}
