import React, { useState, useEffect, useRef } from "react";
import {
  FaUser,
  FaChartLine,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import dummyimg from "../../assets/dummy.png";
import { logout } from "../../Redux/Slicer";

const ProfileDropdown = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user_id = currentUser?._id; // Ensure safe access
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for navigation after logout
  const dropdownRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [userData, setUserData] = useState(null); // Store user data

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user_id) return; // Exit if user_id is not available
      try {
        const response = await fetch(
          `https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`
        );
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        toast.error("Failed to load user data. Please try again.");
      }
    };
    fetchUserData();
  }, [user_id]);

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

  const logoutHandler = async () => {
    try {
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/api/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      console.log("Logout API Response:", result); // Log the API response

      if (!response.ok) {
        toast.error(result.message || "Logout failed. Please try again.");
      } else {
        dispatch(logout());
        console.log("Logout successful!"); // Log success
        toast.success("Logged out successfully!");

        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during logout.");
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="relative z-30" ref={dropdownRef}>
      {/* Profile Icon */}
      <img
        src={userData?.profile_image || dummyimg}
        alt="Profile"
        className="rounded-full w-10 h-10 cursor-pointer"
        onClick={toggleDropdown}
        onError={(e) => (e.target.src = dummyimg)}
      />

      {/* Dropdown Menu */}
      {dropdownOpen && userData && (
        <div className="right-0 z-50 absolute bg-white shadow-lg mt-2 rounded-lg w-64">
          <div className="p-4">
            {/* Profile Details */}
            <div className="flex items-center space-x-3">
              <img
                src={userData.profile_image || dummyimg}
                alt="User"
                className="rounded-full w-10 h-10"
                onError={(e) => (e.target.src = dummyimg)}
              />
              <div>
                <h2 className="font-semibold text-gray-800">
                  {userData.name || "User Name"}
                </h2>
                <p className="text-gray-600">
                  {onlineStatus ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-b"></div>

          {/* Links */}
          <div className="py-2">
            <Link
              to="/profile"
              className="flex items-center hover:bg-gray-200 p-2 text-gray-700 transition duration-300"
              onClick={() => setDropdownOpen(false)}
            >
              <FaUser className="mr-2" />
              Profile
            </Link>
            <Link
              to="/analytics"
              className="flex items-center hover:bg-gray-200 p-2 text-gray-700 transition duration-300"
              onClick={() => setDropdownOpen(false)}
            >
              <FaChartLine className="mr-2" />
              Analytics
            </Link>
            <Link
              to="/billing"
              className="flex items-center hover:bg-gray-200 p-2 text-gray-700 transition duration-300"
              onClick={() => setDropdownOpen(false)}
            >
              <FaDollarSign className="mr-2" />
              Billing
            </Link>
            <Link
              to="/settings"
              className="flex items-center hover:bg-gray-200 p-2 text-gray-700 transition duration-300"
              onClick={() => setDropdownOpen(false)}
            >
              <FaCog className="mr-2" />
              Settings
            </Link>
          </div>

          <div className="border-b"></div>

          {/* Logout */}
          <div className="py-2">
            <button
              onClick={logoutHandler}
              className="flex items-center hover:bg-red-100 p-2 w-full text-left text-red-600 transition duration-300"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
