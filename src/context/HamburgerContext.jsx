// src/context/HamburgerContext.jsx
import React, { createContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [clickedHamburger, setClickedHamburger] = useState(false);
  const [clickedSublist, setClickedSublist] = useState(false);

  const handleHamburger = () => {
    setClickedHamburger(!clickedHamburger);
  };

  const handleSublist = () => {
    setClickedSublist(!clickedSublist);
    // console.log(clickedSublist);
    // console.log("sublist clicked");
  };

  return (
    <HamburgerContext.Provider value={{ clickedHamburger, handleHamburger, clickedSublist, handleSublist }}>
      {children}
    </HamburgerContext.Provider>
  );
};
