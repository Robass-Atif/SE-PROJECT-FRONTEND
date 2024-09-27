import React, { useState } from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.png";
import passwordshow from "../../../assets/eye.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { data } from "autoprefixer";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "", // Changed from firstName and lastName to fullName
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Destructure formData to get individual values
    const { firstName, lastName, email, password } = formData;
    const fullName = `${firstName} ${lastName}`; // Merging first and last names
  
    try {
      // Make the POST request to the server
      const response = await fetch("https://backend-qyb4mybn.b4a.run/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }), // Send fullName, email, and password
      });
  
      const data = await response.json(); // Parse response once
      console.log("Data:", data);
      // Check if the signup was successful
      if (!data.success) {
        throw new Error("Signup failed!"); // Throw error if signup was not successful
      } else {
        console.log("Signup successful:", data.Data);
        

        // Handle successful signup (e.g., redirect or show a success message)
        navigate("/OTP",{state:{data:data.Data}}); 
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle errors (e.g., show an error message to the user)
    }
  };
  

  return (
    <>
      {/* Header */}
      <header className="py-4 text-center">
        <h1 className="font-bold text-3xl text-gray-900">
          Create your account
        </h1>
      </header>

      {/* Background with diagonal stripes */}
      <div className="relative flex justify-center items-center bg-white min-h-screen">
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(45deg, #e2e8f0 0px, #e2e8f0 10px, white 10px, white 20px)",
            zIndex: "-1",
          }}
        ></div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border-gray-200 bg-white shadow-md mx-4 sm:mx-auto p-6 sm:p-8 border rounded-lg w-full max-w-md sm:max-w-lg"
        >
          <h2 className="mb-6 font-semibold text-center text-gray-800 text-xl sm:text-2xl">
            Sign up to find work you love
          </h2>

          {/* Apple Sign-up Button */}
          <button className="flex justify-center items-center border-gray-300 bg-white hover:bg-gray-100 mb-4 py-3 border rounded-full w-full text-gray-800 text-sm sm:text-base transition duration-300">
            <img src={apple} alt="apple" className="mr-2 w-5 h-5" />
            Continue with Apple
          </button>

          {/* Google Sign-up Button */}
          <button className="flex justify-center items-center border-gray-300 bg-white mb-4 px-4 py-2 border rounded-full w-full text-gray-800 text-sm sm:text-base">
            <img src={google} alt="Google" className="mr-2 h-6" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex justify-center items-center my-4">
            <div className="flex-1 bg-gray-300 h-px"></div>
            <span className="px-3 text-gray-500 text-sm sm:text-base">or</span>
            <div className="flex-1 bg-gray-300 h-px"></div>
          </div>

          {/* Name Inputs */}
          <div className="flex sm:flex-row flex-col gap-4 mb-4">
            <div className="flex-1">
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm sm:text-base"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
                placeholder="Type here"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm sm:text-base"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
                placeholder="Type here"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm sm:text-base"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
              placeholder="Password (8 or more characters)"
              required
            />
            <img
              src={passwordshow}
              alt="Show Password"
              className="top-2 right-3 absolute h-6 cursor-pointer"
              onClick={handlePasswordShow}
            />
          </div>

          {/* Terms of Service Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="checked"
              className="border-gray-300 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600"
              required
            />
            <label
              htmlFor="checked"
              className="block ml-2 text-gray-900 text-sm sm:text-base cursor-pointer"
            >
              Yes, I agree to the freelance Terms of Service
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full w-full text-sm text-white sm:text-base transition-colors"
          >
            Create My Account
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/signin">
              <span className="text-indigo-600 hover:underline">Log In</span>
            </Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-600 mt-8 py-4 text-center">
        <p className="text-black text-sm">
          &copy; 2024 Your Company. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Signup;
