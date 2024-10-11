import React, { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaChartLine,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"; // Import the spinner
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dummyimg from "../../assets/dummy.png";

const ProfileDropdown = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user_id = currentUser?._id;

  const getUser = async (user_id) => {
    const response = await fetch(
      `https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useQuery({
    queryKey: ["user", user_id],
    queryFn: () => getUser(user_id),
    enabled: !!user_id, // Only run the query if user_id is available
    onError: (error) => {
      toast.error("Failed to load user data. Please try again.");
    },
  });

  const [Username, setUsername] = useState(currentUser?.name || "User Name");
  const [UserType, setUserType] = useState(
    currentUser?.user_type || "User Type"
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [theme, setTheme] = useState("dark");

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", closeDropdown);
    } else {
      document.removeEventListener("click", closeDropdown);
    }

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    if (userData) {
      setUsername(userData.name || "User Name");
      setUserType(userData.user_type || "User Type");
    }
  }, [userData]);

  const toggleOnlineStatus = () => {
    setOnlineStatus((prev) => !prev);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value; // Assuming you have theme classes on the body
  };

  return (
    <div className="relative z-30" ref={dropdownRef}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Profile Icon */}
      <img
        src={userData?.profile_image || dummyimg}
        alt="Profile"
        className="rounded-full w-10 h-10 cursor-pointer"
        onClick={toggleDropdown}
        onError={(e) => (e.target.src = dummyimg)} // Set to dummy image if not found
      />

      {/* Loading Spinner */}
      {userLoading && (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader color="#4A90E2" size={30} />
        </div>
      )}

      {/* Error Handling */}
      {userError && (
        <p className="mt-4 text-center text-red-500">Error loading user data</p>
      )}

      {/* Dropdown Menu */}
      {dropdownOpen && !userLoading && !userError && (
        <div className="right-0 z-50 absolute bg-white shadow-lg mt-2 rounded-lg w-64">
          <div className="p-4">
            {/* Profile Details */}
            <div className="flex items-center space-x-3">
              <img
                src={userData?.profile_image || dummyimg}
                alt="User"
                className="rounded-full w-10 h-10"
                onError={(e) => (e.target.src = dummyimg)} // Fallback if image not found
              />
              <div>
                <h2 className="font-semibold text-gray-800">{Username}</h2>
                <p className="text-gray-500 text-sm">{UserType}</p>
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
            <Link
              to="/profile"
              className="flex items-center space-x-3 hover:text-black cursor-pointer"
            >
              <FaUser className="w-5 h-5" />
              <p>Your profile</p>
            </Link>
            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaChartLine className="w-5 h-5" />
              <p>Stats and trends</p>
            </div>
            <div className="flex items-center space-x-3 hover:text-black cursor-pointer">
              <FaDollarSign className="w-5 h-5" />
              <p>Membership plan</p>
            </div>
            <Link
              to="/settings"
              className="flex items-center space-x-3 hover:text-black cursor-pointer"
            >
              <FaCog className="w-5 h-5" />
              <p>Account settings</p>
            </Link>
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
