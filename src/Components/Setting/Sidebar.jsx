import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="top-0 left-0 fixed border-gray-200 bg-white shadow-lg p-4 border-r w-64 h-full">
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
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
