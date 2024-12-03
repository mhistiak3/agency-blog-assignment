import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the child routes/pages */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
