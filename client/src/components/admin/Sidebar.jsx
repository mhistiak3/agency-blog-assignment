import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaCogs,
  FaUsers,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate()
  const logoutHandler = async () => {
    // /admin/logout
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/admin/logout`, {
     
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`w-64 bg-blue-700 text-white flex flex-col justify-between absolute h-full md:static z-10 ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* Top - Logo */}
      <div className="p-6">
        <button
          className="block md:hidden bg-red-900 py-2 px-4 cursor-pointer mb-2 rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          Hide Panel
        </button>
        <h1 className="text-2xl font-bold text-center">
          <Link to="/admin">Agency AdminPanel</Link>
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-6">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin/blogs/create"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/blogs/list"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaFileAlt />
              <span>Show Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/services/create"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/services/list"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaCogs />
              <span>Show Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/members/create"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaPlus />
              <span>Create Members</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/members/list"
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-3 rounded-lg hover:bg-blue-600 ${
                  isActive ? "bg-blue-800" : ""
                }`
              }
            >
              <FaUsers />
              <span>Show Members</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Bottom - Logout */}
      <div className="p-6">
        <button
          onClick={logoutHandler}
          className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
