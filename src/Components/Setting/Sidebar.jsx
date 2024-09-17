import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button to toggle sidebar on mobile */}
      <button
        className="top-30 left-4 z-50 fixed lg:hidden bg-blue-600 p-2 rounded-md text-white rotate-90"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 bg-white shadow-lg p-4 border-r w-64 h-full transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 lg:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "64px" }} // Adjust based on navbar height
      >
        <div className="flex justify-between items-center mb-6">
          <div className="font-semibold text-gray-900 text-xl">Logo</div>
          <div className="text-gray-600 text-xl">?</div>
        </div>
        <ul className="space-y-4">
          {[
            "profile",
            "account",
            "notifications",
            "privacy",
            "payments",
            "security",
            "subscription",
            "help",
          ].map((item) => (
            <li key={item}>
              <Link
                to={`/settings/${item}`}
                className="block hover:bg-blue-50 p-2 rounded-lg text-gray-700 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="z-30 fixed inset-0 lg:hidden bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
