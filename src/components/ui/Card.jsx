import PropTypes from "prop-types";

export default function Card({ image, title, children, onClick, className }) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-4 flex flex-col items-center ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          className="w-32 h-48 object-cover mb-4"
        />
      )}
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
