import PropTypes from "prop-types";
import CloseButton from "./ui/CloseButton";
import NavLinks from "./ui/NavLinks";

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-blue-700 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden z-50`}
    >
      <CloseButton onClick={toggleMenu} />
      <NavLinks />
    </div>
  );
}

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
