import { Link, NavLink } from "react-router-dom";
import { FaPlus, FaCogs, FaUsers, FaSignOutAlt, FaFileAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col justify-between">
      {/* Top - Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">
          <Link to="/admin">Agency AdminPanel</Link>
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-6">
        <ul className="space-y-4">
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
        </ul>
      </nav>

      {/* Bottom - Logout */}
      <div className="p-6">
        <NavLink
          to="/admin/logout"
          className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
