import PropTypes from "prop-types";
import Overlay from "./Overlay";

export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
      </div>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
