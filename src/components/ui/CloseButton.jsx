import PropTypes from "prop-types";

export default function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} className="p-4">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
