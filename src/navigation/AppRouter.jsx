import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Sidebar from '../components/SideBar/SideBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function AppRouter() {
  return (
    <div>
      <Router>
    <div className='bg-[#F6F6F6] min-h-screen'>
      <NavBar/>
      <Sidebar/>
      
    </div>
   
    <div className='flex p-4'>
    <Routes>
            <Route path="/" element={""} />
            <Route path="/about" element={""} />
            <Route path="/services" element={""} />
            <Route path="/contact" element={""} />
            <Route path="/faq" element={""} />
          </Routes>
    </div>
    </Router>
    </div>
  )
}

export default AppRouter
