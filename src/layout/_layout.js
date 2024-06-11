import Sidebar from "../components/SideBar/SideBar";
import NavBar from "../components/Navbar/NavBar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
