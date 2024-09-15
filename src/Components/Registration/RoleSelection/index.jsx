import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleCreateAccount = () => {
    if (selectedRole) {
      navigate("/signup"); // Redirect to the signup route
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-gradient-to-r from-white via-white to-gray-300 min-h-screen overflow-hidden">
      {/* Particle Background */}
      <div className="z-0 absolute inset-0 overflow-hidden">
        <div className="particle-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>

      {/* 3D Glass Panel Container */}
      <div className="relative z-10 flex flex-col items-center border-white bg-white bg-opacity-10 shadow-2xl backdrop-blur-lg p-8 border border-opacity-30 rounded-2xl w-full max-w-xl">
        <h1 className="mb-8 font-bold text-4xl text-black">
          Join as a Client or Freelancer
        </h1>

        {/* Role selection options with 3D hover effects */}
        <div className="flex space-x-8 mb-10">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("client")}
            className={`cursor-pointer p-8 w-72 h-48 bg-black bg-opacity-20 backdrop-blur-lg border-2 rounded-3xl transition-all transform hover:shadow-[0px_0px_15px_4px_rgba(236,72,153,0.6)] ${
              selectedRole === "client"
                ? "border-pink-500"
                : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span role="img" aria-label="client" className="text-5xl">
                💼
              </span>
              <input
                type="radio"
                checked={selectedRole === "client"}
                onChange={() => handleRoleSelect("client")}
                className="form-radio text-pink-500"
              />
            </div>
            <p className="font-medium text-black text-xl tracking-wide">
              I’m a client, hiring for a project
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRoleSelect("freelancer")}
            className={`cursor-pointer p-8 w-72 h-48 bg-black bg-opacity-20 backdrop-blur-lg border-2 rounded-3xl transition-all transform hover:shadow-[0px_0px_15px_4px_rgba(139,92,246,0.6)] ${
              selectedRole === "freelancer"
                ? "border-purple-500"
                : "border-transparent"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span role="img" aria-label="freelancer" className="text-5xl">
                👨‍💻
              </span>
              <input
                type="radio"
                checked={selectedRole === "freelancer"}
                onChange={() => handleRoleSelect("freelancer")}
                className="form-radio text-purple-500"
              />
            </div>
            <p className="font-medium text-black text-xl tracking-wide">
              I’m a freelancer, looking for work
            </p>
          </motion.div>
        </div>

        {/* Create Account Button with neon effect */}
        <motion.button
          onClick={handleCreateAccount}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-full py-4 rounded-full font-bold text-lg transition-all transform ${
            selectedRole
              ? "bg-gradient-to-r from-purple-500 to-pink-600 shadow-[0px_0px_20px_rgba(236,72,153,0.8)] text-black"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedRole}
        >
          Create Account
        </motion.button>

        {/* Log in Link */}
        <p className="mt-6 text-black text-opacity-80">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-500 hover:underline cursor-pointer"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
