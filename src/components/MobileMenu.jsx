import PropTypes from "prop-types";

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-blue-700 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden z-50`}
    >
      <button onClick={toggleMenu} className="p-4">
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
          ></path>
        </svg>
      </button>
      <nav className="flex flex-col items-center p-4 space-y-4 text-white">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/reservations" className="hover:underline">
          Reservations
        </a>
      </nav>
    </div>
  );
}

//Defined prop types for better documentation and error checking
MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // 'isMenuOpen' should be a required boolean
  toggleMenu: PropTypes.func.isRequired, // 'toggleMenu' should be a required function
};
