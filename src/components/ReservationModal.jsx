import { useState } from "react";
import PropTypes from "prop-types";

export default function ReservationModal({ selectedBook, onClose, onReserve }) {
  const [selectedType, setSelectedType] = useState("Book");
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedQuickPickup, setSelectedQuickPickup] = useState(false);

  const handleReserveClick = () => {
    const reservationData = {
      bookId: selectedBook.id,
      userId: "123",
      isAudiobook: selectedType === "Audiobook",
      days: selectedDuration,
      isQuickPickUp: selectedQuickPickup,
      bookName: selectedBook.name,
      bookPictureUrl: selectedBook.pictureUrl,
    };

    console.log("Reservation data", reservationData);

    onReserve(reservationData);
  };

  return (
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
        {/* Duration selection */}
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

        {/* Pricing details */}
        <div className="mb-4">
          <h4 className="font-bold">Pricing details:</h4>
          <ul>
            <li>Book (1 day): 2€</li>
            <li>Audiobook (1 day): 3€</li>
            <li>Service Fee: 3€</li>
            <li>Quick Pickup: 5€</li>
            <li>Total price -{">"} ReservationPage</li>
          </ul>
        </div>

        {/* Confirm and Cancel modal */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-red-500 text-white p-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleReserveClick}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

//Define prop types for ResevationModal
ReservationModal.propTypes = {
  selectedBook: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onReserve: PropTypes.func.isRequired,
};
