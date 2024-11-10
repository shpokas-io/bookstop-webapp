import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import Select from "./ui/Select";

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

    onReserve(reservationData);
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="w-96">
        <h3 className="text-xl mb-4 font-bold">{selectedBook.name}</h3>

        <Select
          label="Type:"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          options={[
            { value: "Book", label: "Book" },
            { value: "Audiobook", label: "Audiobook" },
          ]}
        />

        <InputField
          label="Duration (days):"
          type="number"
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(Number(e.target.value))}
          min="1"
        />

        <InputField
          label="Quick Pickup:"
          type="checkbox"
          checked={selectedQuickPickup}
          onChange={(e) => setSelectedQuickPickup(e.target.checked)}
        />

        <div className="mb-4">
          <h4 className="font-bold">Pricing details:</h4>
          <ul>
            <li>Book (1 day): 2€</li>
            <li>Audiobook (1 day): 3€</li>
            <li>Service Fee: 3€</li>
            <li>Quick Pickup: 5€</li>
          </ul>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            label="Cancel"
            onClick={onClose}
            variant="remove"
            color="bg-red-500 text-white"
          />
          <Button
            label="Reserve"
            onClick={handleReserveClick}
            variant="default"
            color="bg-blue-500 text-white"
          />
        </div>
      </div>
    </Modal>
  );
}

ReservationModal.propTypes = {
  selectedBook: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onReserve: PropTypes.func.isRequired,
};
