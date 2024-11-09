import React from "react";

export default function ReservationCard({ reservation, onRemove }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={reservation.bookPictureUrl}
        alt={reservation.bookName}
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
        Total cost: €{reservation.totalCost.toFixed(2)}
      </p>
      <button
        onClick={onRemove}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
      >
        Remove reservation
      </button>
    </div>
  );
}
