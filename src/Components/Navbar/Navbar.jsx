import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaBars,
  FaQuestionCircle,
  FaTh,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileDropdown from "./profileDropDown";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  // Safely access the user role
  const userRole = currentUser?.data?.type; // Fallback to 'guest' if currentUser is undefined
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4">
      {/* Left Side - Logo and Links */}
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://via.placeholder.com/100x30?text=LSP"
            alt="LSP Logo"
            className="mr-6 h-6"
          />
        </Link>

        {/* Links */}
        {currentUser && userRole === "buyer" && (
          <div className="md:flex space-x-6 hidden">
            <Link
              to="/services"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Buy Service
            </Link>

            <Link
              to="/client-dashboard"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/message"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Messages
            </Link>
          </div>
        )}

        {/* Links for Service Providers */}
        {currentUser && userRole === "freelancer" && (
          <div className="md:flex space-x-6 hidden">
            <Link
              to="/dashboard"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/analytics"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Analytics
            </Link>

            <Link
              to="/message"
              className="text-gray-700 text-sm hover:text-indigo-600 transition duration-300"
            >
              Messages
            </Link>
          </div>
        )}
      </div>

      {/* Center - Search Bar */}
      <div className="md:block flex-grow hidden mx-6">
        <div className="relative">
          <FaSearch className="top-3 left-3 absolute text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 py-2 pr-3 pl-10 rounded-lg focus:ring-custom-violet w-full text-gray-700"
          />
        </div>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center space-x-4">
        <FaQuestionCircle className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
        <FaTh className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
        <FaBell className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
        <FaEnvelope className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />

        <ProfileDropdown />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700" onClick={toggleMenu}>
        <FaBars className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="top-14 right-0 left-0 z-30 absolute flex flex-col space-y-4 md:hidden bg-white shadow-md p-4 text-gray-700">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/services" className="hover:text-indigo-600">
            Services
          </Link>
          <Link to="/message" className="hover:text-indigo-600">
            Messages
          </Link>
          <Link to="/notifications" className="hover:text-indigo-600">
            Notifications
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
