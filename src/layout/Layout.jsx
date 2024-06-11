import Sidebar from "../components/SideBar/SideBar";
import NavBar from "../components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <Router>
    <div className='bg-[#F6F6F6] min-h-screen '>
      
      <Sidebar/>
      {/* <main>{children}</main> */}
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
  );
}

export default Layout;
