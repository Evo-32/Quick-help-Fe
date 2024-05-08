import React from "react";
import Home from "./Home";



const Navbar = () => {
  return (
    <div>
      <div className="fixed  bg-[#a5bbd3] text-white top-0 left-0 w-full text-grey-500 p-4 flex justify-between items-center z-40">
        <div className="flex items-center">
          <div className=" text-4xl text-pink-600 font-semibold">Quick help</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="active flex items-center py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="about" className="active flex items-center py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="employee" className="active flex items-center py-2 px-4">
              Employee
            </a>
          </li>
          <li>
            <a href="contact" className="active flex items-center py-2 px-4">
              Contact
            </a>
          </li>
          <button className="bg-white  rounded-full  hover:bg-[#893470] hover:text-white   text-[#bf5084]">
            <a href="signin" className="active flex items-center py-2 px-4">
              Sign in
            </a>
          </button>
        </ul>
      </div>
      <Home />
    </div>
  );
};

export default Navbar;
