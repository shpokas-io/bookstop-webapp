import PropTypes from "prop-types";
import Card from "./ui/Card";
import Button from "./ui/Button";
export default function ReservationCard({ reservation, onRemove }) {
  return (
    <Card
      image={{ src: reservation.bookPictureUrl, alt: reservation.bookName }}
      title={reservation.bookName}
    >
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
      <Button
        label="Remove reservation"
        onClick={onRemove}
        color="bg-red-500 text-white"
      />
    </Card>
  );
}

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    bookPictureUrl: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    isAudiobook: PropTypes.bool.isRequired,
    isQuickPickUp: PropTypes.bool.isRequired,
    totalCost: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
