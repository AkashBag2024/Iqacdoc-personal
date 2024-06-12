import React from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import HomePage from '../pages/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';


function AppRouter() {
  return (
    <div>
      <Router>
    
   
    <div className=''>
    <Routes>
    <Route path="/" element={<ProtectedRoutes compoenent={HomePage}/>} />
            <Route path="/about" element={""} />
            <Route path="/services" element={""} />
            <Route path="/contact" element={""} />
            <Route path="/faq" element={""} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
    </div>
    </Router>
    </div>
  )
}

export default AppRouter
