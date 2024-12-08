import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6 border-b border-gray-800">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition">
            Agency<span className="text-yellow-300">Blog</span>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <ul
          className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg mt-4 lg:mt-0 absolute bg-indigo-600 w-full top-12 left-0 p-5 z-50 lg:p-0 lg:w-auto lg:bg-transparent lg:static ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-yellow-300 transition font-medium"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-yellow-300 transition font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition font-medium"
            >
              Contact
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;