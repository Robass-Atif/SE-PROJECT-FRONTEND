import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Safely destructure 'role'

  // // Initialize state with value from localStorage
  // useEffect(() => {
  //   const storedRole = localStorage.getItem("role");
  //   if (storedRole) {
  //     setSelectedRole(storedRole);
  //   }
  // }, []);

  const handleRoleSelect = async (role) => {
    setSelectedRole(role);
    e.preventDefault();
    setLoading(true); // Show loader on form submission
    try {
      // Make the POST request to the server
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/api/role-selection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({  email,role:selectedRole }), // Send fullName, email, password, and role
        }
      );

      const data = await response.json(); // Parse response
      console.log("Data:", data);
      // Check if the signup was successful
      if (!data.success) {
        throw new Error("Signup failed!"); // Handle signup error
      } else {
        console.log("Signup successful:", data.Data);
        navigate("/OTP", { state: { data: data.Data } }); // Navigate to OTP page
      }
    } catch (error) {
      console.error("Error:", error); // Handle errors
    } finally {
      setLoading(false); // Hide loader after request completes
    }
    
  };

  const handleCreateAccount = () => {
    if (selectedRole) {
    
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 py-8 min-h-screen">
      {/* Role selection options with 3D hover effects */}
      <div className="flex flex-col space-y-8 px-4 w-full max-w-xl">
        <h1 className="mb-8 font-bold text-3xl text-center text-gray-900">
          Join as a Client or Freelancer
        </h1>

        <div className="flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0">
          {/* Client Selection Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("buyer")}
            className={`cursor-pointer p-6 w-full sm:w-60 h-40 bg-gray-100 border-2 rounded-lg transition-all transform hover:shadow-lg ${
              selectedRole === "client"
                ? "border-indigo-600"
                : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span role="img" aria-label="client" className="text-4xl">
                💼
              </span>
              <input
                type="radio"
                checked={selectedRole === "buyer"}
                onChange={() => handleRoleSelect("client")}
                className="form-radio text-indigo-600"
              />
            </div>
            <p className="font-medium text-gray-900 text-lg">
              I’m a client, looking for services
            </p>
          </motion.div>

          {/* Freelancer Selection Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("service provider")}
            className={`cursor-pointer p-6 w-full sm:w-60 h-40 bg-gray-100 border-2 rounded-lg transition-all transform hover:shadow-lg ${
              selectedRole === "freelancer"
                ? "border-indigo-600"
                : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span role="img" aria-label="freelancer" className="text-4xl">
                👨‍💻
              </span>
              <input
                type="radio"
                checked={selectedRole === "service provider"}
                onChange={() => handleRoleSelect("service provider")}
                className="form-radio text-indigo-600"
              />
            </div>
            <p className="font-medium text-gray-900 text-lg">
              I’m a service provider, looking for work
            </p>
          </motion.div>
        </div>

        {/* Create Account Button */}
        <motion.button
          onClick={handleCreateAccount}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-full py-3 rounded-full font-bold text-lg transition-all ${
            selectedRole
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-gray-300 cursor-not-allowed text-gray-500"
          }`}
          disabled={!selectedRole}
        >
          Select Role
        </motion.button>

        {/* Log in Link */}
        {/* <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-indigo-600 hover:underline cursor-pointer"
          >
            Log In
          </span>
        </p> */}
      </div>
    </div>
  );
};

export default RoleSelection;
