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
import { AiFillHome } from "react-icons/ai";
import logo from "../../assets/images/clg_logo.png";

const Sidebar = () => {
  // context
  const { clickedHamburger, clickedSublist, handleSublist } = useContext(HamburgerContext);

  return (
    <div className='flex w-auto'>
      {/* navbar */}
  
      <div className={`bg-gray-900 h-full text-white`}>
        {/* sidebar open and close */}
        <div className={`fixed  border-2 border-[#E5E7EB]  left-0 h-full bg-white text-white flex flex-col  transition-width duration-300 ${clickedHamburger ? 'w-64 duration-700' : 'w-24 duration-700'}`}>
          <div className="flex-1">
         
            <ul className="space-y-2 p-4 ">
              <div className='flex flex-col items-center'>  <img src={logo} alt="Logo" className="h-10 object-cover " /></div>
          
              <li className='flex gap-4 items-center'>
                <Link to="/" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <AiFillHome className="w-8 h-8 " color='black' />
                  {clickedHamburger && <span className="text-black text-sm font-bold ">Home</span>}
                </Link>
                {/* arrow up and down when clicked */}
                {clickedHamburger && (clickedSublist ? (
                  <MdArrowDropDown className=' flex cursor-pointer' onClick={handleSublist} color='black' />
                ) : (
                  <TiArrowSortedUp className=' flex cursor-pointer' onClick={handleSublist} color='black' /> 
                ))}
              </li>
              {/* Sublist open and close */}
              {clickedHamburger && (
                <ul className={`pl-8 transition-all duration-700 ${clickedSublist ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <li>
                    <Link to="/sublist1" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                      <span className='text-black text-sm font-bold '>Sublist 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/sublist2" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                      <span className='text-black text-sm font-bold '>Sublist 2</span>
                    </Link>
                  </li>
                </ul>
              )}
              {/* sublist end */}
              <li>
                <Link to="/about" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <FcAbout className="w-8 h-8 " color='black'/>
                  {clickedHamburger && <span className='text-black text-sm font-bold '>About</span>}
                </Link>
              </li>
              <li>
                <Link to="/services" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <GrServices className="w-8 h-8 " color='black'/>
                  {clickedHamburger && <span className='text-black text-sm font-bold '>Services</span>}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <IoIosContact className="w-8 h-8 " color='black'/>
                  {clickedHamburger && <span className='text-black text-sm font-bold '>Contact</span>}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="py-2 px-4 rounded hover:bg-gray-200 items-center flex gap-4">
                  <FaQuestion className="w-8 h-8 " color='black'/>
                  {clickedHamburger && <span className='text-black text-sm font-bold '>FAQ</span>}
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
