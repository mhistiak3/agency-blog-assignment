import { Outlet } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
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
  }, []);
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
