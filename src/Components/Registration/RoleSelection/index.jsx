import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";


const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Safely destructure 'email'

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleCreateAccount = async () => {
    if (!selectedRole) return;

    setLoading(true); // Show loader on form submission
    console.log(email);

    try {
      // Make the POST request to the server
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/api/role-selection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, role: selectedRole }), // Send email and role
        }
      );

      const data = await response.json(); // Parse response
      console.log("Data:", data);

      // Check if the signup was successful
      if (!data.success) {
        throw new Error("Role selection failed!"); // Handle error
      } else {
        console.log("Role selection successful:", data.data);
        navigate("/signin")
       
      }
    } catch (error) {
      console.error("Error:", error); // Handle errors
    } finally {
      setLoading(false); // Hide loader after request completes
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 py-8 min-h-screen">
      {/* Role selection options */}
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
              selectedRole === "buyer" ? "border-indigo-600" : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <span role="img" aria-label="client" className="text-4xl">
                💼
              </span>
              <input
                type="radio"
                checked={selectedRole === "buyer"}
                onChange={() => handleRoleSelect("buyer")}
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
              selectedRole === "service provider"
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
          disabled={!selectedRole || loading} // Disable while loading
        >
          {loading ? "Loading..." : "Select Role"}
        </motion.button>
      </div>
    </div>
  );
};

export default RoleSelection;
