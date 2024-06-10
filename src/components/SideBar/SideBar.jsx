import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HamburgerContext } from '../../context/HamburgerContext';

const Sidebar = () => {
  const { clickedHamburger, handleHamburger } = useContext(HamburgerContext);

  return (
    <div className={`fixed top-30 left-0 h-full bg-gray-800 text-white flex flex-col m-4 rounded-md transition-transform transform ${clickedHamburger ? 'translate-x-0' : '-translate-x-full'} w-64 z-50`}>
      
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Link to="/" className="py-2 px-4 rounded hover:bg-gray-700 items-center flex gap-4">
              <FaHome className="w-8 h-8" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-2 px-4 rounded hover:bg-gray-700 items-center flex gap-4">
              <FcAbout className="w-8 h-8" />
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="py-2 px-4 rounded hover:bg-gray-700 items-center flex gap-4">
              <GrServices className="w-8 h-8" />
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-2 px-4 rounded hover:bg-gray-700 items-center flex gap-4">
              <IoIosContact className="w-8 h-8" />
              Contact
            </Link>
          </li>
          <li>
            <Link to="/faq" className="py-2 px-4 rounded hover:bg-gray-700 items-center flex gap-4">
              <FaQuestion className="w-8 h-8" />
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
