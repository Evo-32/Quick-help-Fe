import React, { useState } from "react";
import Home from "./Home";

const Menu = ({ isOpen }) => {
  return (
    <ul
    id="mobileNav"
      className={`absolute flex flex-col space-y-2 text-white top-16 left-0 ${
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
        <button className="bg-white rounded-full hover:bg-[#893470] block py-2 px-4 hover:text-white text-[#bf5084]">
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
      <div className="fixed bg-[#a5bbd3] text-white top-0 left-0 w-full text-grey-500 p-4 flex justify-between items-center z-40">
        <div className="flex items-center">
          <div className="text-4xl text-pink-600 font-semibold">Quick help</div>
        </div>
        <ul className="flex space-x-4 nav32 hidden md:flex">
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
            <button className="bg-white rounded-full hover:bg-[#893470] hover:text-white text-[#bf5084]">
              <a href="/signin" className="flex items-center py-2 px-4">
                Sign in
              </a>
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menuToggle"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        <Menu isOpen={isMenuOpen} />
      </div>
      <Home />
    </div>
  );
};

export default Navbar;
