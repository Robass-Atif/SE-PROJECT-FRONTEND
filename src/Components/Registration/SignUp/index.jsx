import React, { useState } from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.png";
import passwordshow from "../../../assets/eye.png";
import passwordnotshow from "../../../assets/closeEye.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loader from "../../loader/index"; // Import the loader component
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../../Redux/Slicer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const location = useLocation();
  const { role } = location.state || {}; // Safely destructure 'role'
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // State to track loading status
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch(); // Add dispatch to trigger redux actions

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader on form submission
    const { fullName, email, password } = formData;

    try {
      // Make the POST request to the server
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password }), // Send fullName, email, password, and role
        }
      );

      const data = await response.json(); // Parse response
      console.log("Data:", data);

      if (!data.success) {
        notifyError(data.message); // Display error notification
        console.error("Signup failed:", data.message);
        // notifyError("Signup failed, please try again."); // Display error notification
      } else {
        notifySuccess("Signup successful!"); // Display success notification
        console.log("Signup successful:", data.data);
        navigate("/OTP", { state: { data: data.data } }); // Navigate to OTP page
      }
    } catch (error) {
      notifyError("Signup failed, please try again."); // Display error notification
      console.error("Error:", error);
    } finally {
      setLoading(false); // Hide loader after request completes
    }
  };

  // Google Sign-In handler
  const handleGoogleSignIn = async (credentialResponse) => {
    const { credential } = credentialResponse;
    console.log("Google sign-in response:", credential);

    try {
      dispatch(signInStart());
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: credential }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        dispatch(signInSuccess(data.user));
        notifySuccess("Google Sign-In successful!"); // Display success notification
        console.log("User signed in:", data.user);
        if (data.user.user_type === "service provider") {
          navigate("/profile", { state: { user: data.user } });
        } else {
          navigate("/services", { state: { user: data.user } });
        }
      } else {
        dispatch(signInFailure("Google Sign-In failed."));
        notifyError("Google Sign-In failed."); // Display error notification
      }
    } catch (error) {
      dispatch(signInFailure(error));
      notifyError("Error during Google sign-in."); // Display error notification
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId="697063750023-7nha10stlk2j37gijq3p2kvgbmpmpu9r.apps.googleusercontent.com">
        {/* Loader Component: Show only if loading */}
        {loading && <Loader />}

        {/* Toast Notifications */}
        <ToastContainer />

        {/* Form and Content */}
        <header className="py-4 text-center">
          <h1 className="font-bold text-3xl text-gray-900">
            Create your account
          </h1>
        </header>

        <div className="relative flex justify-center items-center bg-white min-h-screen">
          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(45deg, #e2e8f0 0px, #e2e8f0 10px, white 10px, white 20px)",
              zIndex: "-1",
            }}
          ></div>

          <form
            onSubmit={handleSubmit}
            className="border-gray-200 bg-white shadow-md mx-4 sm:mx-auto p-6 sm:p-8 border rounded-lg w-full max-w-md sm:max-w-lg"
          >
            <h2 className="mb-6 font-semibold text-center text-gray-800 text-xl sm:text-2xl">
              Sign up to find work you love
            </h2>

            {/* Google Sign-In Button */}
            <button className="flex justify-center items-center border-gray-300 bg-white hover:bg-gray-100 mb-2 py-2 border rounded-full w-full text-gray-800 text-sm sm:text-base transition duration-300">
              <GoogleLogin
                onSuccess={handleGoogleSignIn}
                onError={(error) => {
                  console.error("Google sign-in failed:", error);
                  notifyError("Google sign-in failed."); // Display error notification
                }}
              />
            </button>

            <div className="flex justify-center items-center my-4">
              <div className="flex-1 bg-gray-300 h-px"></div>
              <span className="px-3 text-gray-500 text-sm sm:text-base">
                or
              </span>
              <div className="flex-1 bg-gray-300 h-px"></div>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm sm:text-base"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
                placeholder="Type your full name here"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm sm:text-base"
              >
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
                src={showPassword ? passwordnotshow : passwordshow} // Toggle icons based on showPassword state
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="top-10 right-3 absolute h-6 cursor-pointer"
                onClick={handlePasswordShow}
              />
            </div>

            {/* Terms of Service */}
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
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full w-full text-sm text-white sm:text-base transition-colors flex justify-center items-center"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  <span className="ml-2">Creating your account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Login Link */}
            <p className="mt-4 text-center text-sm sm:text-base">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
        {/* Footer */}
        <footer className="bg-indigo-600 py-4 mt-10 w-full text-white">
          <div className="mx-auto text-center container">
            <p className="text-xs sm:text-sm">
              © 2024 Your App. All rights reserved.
            </p>
          </div>
        </footer>
      </GoogleOAuthProvider>
    </>
  );
};

export default Signup;
