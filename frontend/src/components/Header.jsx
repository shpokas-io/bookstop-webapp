import { useState } from "react";

export default function Header() {
  //State for burger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font bold">BookSpot</h1>

      <button
        onClick={toggleMenu}
        className="block lg:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24"
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

      {/* Mobile burger menu  */}
      {isMenuOpen && (
        <nav className="absolute top-14 right-0 bg-blue-600 w-full p-4 lg:hidden flex flex-col justify-center items-center">
          <a href="/" className="block py-2 hover:underline">
            Home
          </a>
          <a href="/reservations" className="block py-2 hover:underline">
            Reservations
          </a>
        </nav>
      )}
    </header>
  );
}
