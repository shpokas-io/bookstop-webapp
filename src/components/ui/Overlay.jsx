import PropTypes from "prop-types";

export default function Overlay({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
    />
  );
}

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
