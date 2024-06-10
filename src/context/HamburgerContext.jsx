// src/context/HamburgerContext.jsx
import React, { createContext, useState } from 'react';

export const HamburgerContext = createContext();

export const HamburgerProvider = ({ children }) => {
  const [clickedHamburger, setClickedHamburger] = useState(false);

  const handleHamburger = () => {
    setClickedHamburger(!clickedHamburger);
  };

  return (
    <HamburgerContext.Provider value={{ clickedHamburger, handleHamburger }}>
      {children}
    </HamburgerContext.Provider>
  );
};
