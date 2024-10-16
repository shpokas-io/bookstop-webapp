import { useState } from "react";
import MobileMenu from "./MobileMenu";

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
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

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
