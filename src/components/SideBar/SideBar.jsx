import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { HamburgerContext } from '../../context/HamburgerContext';
import NavBar from '../Navbar/NavBar';
import { MdArrowDropDown } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";

const Sidebar = () => {
  // context
  const { clickedHamburger, clickedSublist, handleSublist } = useContext(HamburgerContext);

  return (
    <div className='flex w-full'>
      {/* navbar */}
      <NavBar />
      <div className={`bg-gray-900 h-full text-white`}>
        {/* sidebar open and close */}
        <div className={`fixed top-10 left-0 h-full bg-white text-white flex flex-col m-4 rounded-md transition-width duration-300 ${clickedHamburger ? 'w-64 duration-700' : 'w-24 duration-700'}`}>
          <div className="flex-1">
            <ul className="space-y-2 p-4">
              <li className='flex gap-4 items-center'>
                <Link to="/" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <FaHome className="w-8 h-8 bg-black" />
                  {clickedHamburger && <span className="text-black">Home</span>}
                </Link>
                {/* arrow up and down when clicked */}
                {clickedHamburger && (clickedSublist ? (
                  <MdArrowDropDown className='bg-black flex cursor-pointer' onClick={handleSublist} />
                ) : (
                  <TiArrowSortedUp className='bg-black flex cursor-pointer' onClick={handleSublist} />
                ))}
              </li>
              {/* Sublist open and close */}
              {clickedHamburger && (
                <ul className={`pl-8 transition-all duration-700 ${clickedSublist ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <li>
                    <Link to="/sublist1" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                      <span className='text-black'>Sublist 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sublist2" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                      <span className='text-black'>Sublist 2</span>
                    </Link>
                  </li>
                </ul>
              )}
              {/* sublist end */}
              <li>
                <Link to="/about" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <FcAbout className="w-8 h-8 bg-black" />
                  {clickedHamburger && <span className='text-black'>About</span>}
                </Link>
              </li>
              <li>
                <Link to="/services" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <GrServices className="w-8 h-8 bg-black" />
                  {clickedHamburger && <span className='text-black'>Services</span>}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <IoIosContact className="w-8 h-8 bg-black" />
                  {clickedHamburger && <span className='text-black'>Contact</span>}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <FaQuestion className="w-8 h-8 bg-black" />
                  {clickedHamburger && <span className='text-black'>FAQ</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* side bar end */}
      </div>
    </div>
  );
};

export default Sidebar;
