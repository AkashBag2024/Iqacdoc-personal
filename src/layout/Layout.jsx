import Sidebar from "../components/SideBar/SideBar";
import NavBar from "../components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import ProtectedRoutes from "../navigation/ProtectedRoutes";
import HomePage from "../pages/HomePage";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <Router>
    <div className='bg-[#F6F6F6]  overflow-hidden '>
      
      <Sidebar/>
      {/* <main>{children}</main> */}
    </div>
   
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
  );
}

export default Layout;
