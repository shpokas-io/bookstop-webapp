import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ToggleButton from "./ui/ToggleButton";
import Overlay from "./ui/Overlay";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font bold">
        <a href="/">BookSpot</a>
      </h1>

      <ToggleButton onClick={toggleMenu} />
      <nav className="hidden lg:flex space-x-4">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/reservations" className="hover:underline">
          Reservations
        </a>
      </nav>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && <Overlay onClick={toggleMenu} />}
    </header>
  );
}
