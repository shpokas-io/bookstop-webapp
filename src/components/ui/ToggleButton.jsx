import PropTypes from "prop-types";

export default function ToggleButton({ onClick }) {
  return (
    <button onClick={onClick} className="block lg:hidden focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12H16M4 18h16"
        />
      </svg>
    </button>
  );
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
