import React, { useState } from "react";
import {
  FaUser,
  FaChartLine,
  FaDollarSign,
  FaMoon,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [theme, setTheme] = useState("dark");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleOnlineStatus = () => {
    setOnlineStatus(!onlineStatus);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value; // Assuming you have theme classes on the body
  };

  return (
    <div className="relative z-30">
      {/* Profile Icon */}
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="rounded-full w-10 h-10 cursor-pointer"
        onClick={toggleDropdown}
      />

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="right-0 z-50 absolute bg-white shadow-lg mt-2 rounded-lg w-64">
          <div className="p-4">
            {/* Profile Details */}
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full w-10 h-10"
              />
              <div>
                <h2 className="font-semibold text-gray-800">Ahmad Dev</h2>
                <p className="text-gray-500 text-sm">Freelancer</p>
              </div>
            </div>

            {/* Online Status */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-700">Online for messages</p>
              <button
                className={`relative inline-flex items-center h-6 w-11 rounded-full ${
                  onlineStatus ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={toggleOnlineStatus}
              >
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    onlineStatus ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="border-gray-200 mt-2 border-t" />

          {/* Menu Options */}
          <div className="space-y-4 p-4 text-gray-700">
            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaUser className="w-5 h-5" />
              <Link to="/profile">Your profile</Link>
            </div>
            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaChartLine className="w-5 h-5" />
              <p>Stats and trends</p>
            </div>
            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaDollarSign className="w-5 h-5" />
              <p>Membership plan</p>
            </div>

            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaCog className="w-5 h-5" />
              <p>Account settings</p>
            </div>
          </div>

          <div className="border-gray-200 mt-2 border-t" />

          {/* Log Out */}
          <div className="p-4">
            <div className="flex items-center space-x-3 text-red-600 hover:text-red-800 cursor-pointer">
              <FaSignOutAlt className="w-5 h-5" />
              <p>Log out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
