// src/components/NavBar.jsx
import React, { useContext } from 'react';
import logo from "../../assets/images/clg_logo.png";
import institutionPic from "../../assets/images/ins_pic.png";
import profilePic from "../../assets/images/clg_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { HamburgerContext } from '../../context/HamburgerContext';

function NavBar() {
  // context 
  const { clickedHamburger, handleHamburger } = useContext(HamburgerContext);

  return (
    
    <nav className="bg-white left-0  w-full flex flex-col lg:flex-row justify-between items-center m-4 rounded-lg sticky top-[0] z-50 text">
      {/* hamburgur  */}
      <div className="flex items-center mb-4 lg:mb-0 gap-[3px]">
        <button className="text-black ml-7 pr-[15px]" onClick={handleHamburger}>
          {clickedHamburger ? <FaArrowLeft className='w-10 h-10' /> : <GiHamburgerMenu className='w-10 h-10' />}
        </button>
        <img src={logo} alt="Logo" className="h-10 mr-2 object-cover" />
        <span className="text-black text-3xl font-bold">Iqacdoc</span>
      </div>
      <img
        src={institutionPic}
        alt="Institution"
        className="w-full lg:w-auto h-auto lg:h-12 mb-4 lg:mb-0 lg:mr-4 object-cover"
      />
      <div className="flex items-center gap-5">
        <button className="bg-white text-lg font-semibold text-black border-[#505050] w-auto lg:w-97 h-10 lg:h-38 rounded-xl border p-1">
          Admin/Super admin
        </button>
        <img
          src={profilePic}
          alt="Profile"
          className="w-12 h-12 ml-4 rounded-full object-cover"
        />
        <div >
          <div
            className="rounded px-5 py-3 border border-black 
            bg-[#FFFFFF] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme()] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <div className="flex max-w-full">
              <button className="text-red-500 text-xl leading-[10px] font-medium mb-1">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
