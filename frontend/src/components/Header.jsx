import { useState } from "react";
// import MobileMenu from "./MobileMenu";

export default function Header() {
  // State for burger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font bold">
        <a href="/">BookSpot</a>
      </h1>

      <button
        onClick={toggleMenu}
        className="block lg:hidden focus:outline-none"
      >
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
          ></path>
        </svg>
      </button>

      {/* Navigation for larger screen */}
      <nav className="hidden lg:flex space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/reservations" className="hover:underline">
          Reservations
        </a>
      </nav>

      {/* Sliding Mobile Menu */}
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
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
        ></div>
      )}
    </header>
  );
}
