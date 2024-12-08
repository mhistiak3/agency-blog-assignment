import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const isAdmin = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/admin`,
          { withCredentials: true }
        );


        if (isAdmin?.data?.success) {
          setIsLoggedIn(true);

        } else {
           navigate("/admin/login");
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
        navigate("/admin/login");
        console.log(error);
      }
    })();
    const checkScreenWidth = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [navigate]);

  if (!isLoggedIn) {
    return navigate("/admin/login");
  }
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
        >
          Open Panel
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
