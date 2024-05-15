import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <ul
      id="mobileNav"
      className={`absolute flex flex-col space-y-2 bg-[#a5bbd3] text-white top-16 left-0 w-full ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <li>
        <a href="/" className="block py-2 px-4">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-4">
          About
        </a>
      </li>
      <li>
        <a href="/employee" className="block py-2 px-4">
          Employee
        </a>
      </li>
      <li>
        <a href="/contact" className="block py-2 px-4">
          Contact
        </a>
      </li>
      <li>
        <button
          className="bg-white rounded-full hover:bg-[#893470] block py-2 px-4 hover:text-white text-[#bf5084]"
          onClick={toggleMenu} // Close menu when Sign in button is clicked
        >
          <a href="/signin" className="flex items-center py-2 px-4">
            Sign in
          </a>
        </button>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="fixed bg-white drop-shadow-lg text-[#a5bbd3] top-0 left-0 w-full text-grey-500 p-4 flex justify-around items-center z-40">
        <div className="flex items-center">
          <div className="text-4xl text-pink-600 font-semibold">Quick help</div>
        </div>
        {/* Full navigation bar for larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="flex items-center py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="flex items-center py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="/employee" className="flex items-center py-2 px-4">
              Employee
            </a>
          </li>
          <li>
            <a href="/contact" className="flex items-center py-2 px-4">
              Contact
            </a>
          </li>
          <li>
            <a href="/loginas" className="flex items-center py-2 px-4">
              Sign in
            </a>
          </li>
        </ul>
        {/* Hamburger menu button for smaller screens */}
        <div className="md:hidden">
          <button
            id="menuToggle"
            className="text-gray-400 focus:outline-none bold text-2xl"
            onClick={toggleMenu}
          >
            <CiMenuFries />
          </button>
        </div>
        {/* Mobile menu */}
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;
