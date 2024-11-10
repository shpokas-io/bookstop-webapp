import PropTypes from "prop-types";

export default function InputField({
  label,
  type,
  value,
  onChange,
  checked,
  min,
  className,
}) {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2">{label}</label>
      {type === "checkbox" ? (
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`ml-2 ${className}`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          min={min}
          className={`border border-gray-300 rounded p-2 w-full ${className}`}
        />
      )}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "checkbox"]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  min: PropTypes.number,
  className: PropTypes.string,
};
