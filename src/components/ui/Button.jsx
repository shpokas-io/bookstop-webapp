import PropTypes from "prop-types";

export default function Button({ label, onClick, variant, color, className }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded ${color} ${
        variant === "close" ? "text-white" : "text-black"
      } ${className}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["close", "remove", "default"]),
  color: PropTypes.string,
  className: PropTypes.string,
};
