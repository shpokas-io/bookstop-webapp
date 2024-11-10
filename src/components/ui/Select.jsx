import PropTypes from "prop-types";

export default function Select({ label, value, onChange, options }) {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded p-2 w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
