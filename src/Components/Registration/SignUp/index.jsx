import React from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.png";
import passwordshow from "../../../assets/eye.png";

const Signup = () => {
  const handlePasswordShow = () => {
    // Toggle password visibility functionality here
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
        <form className="border-gray-200 bg-white shadow-md p-8 border rounded-lg w-full max-w-lg">
          <h2 className="mb-6 font-semibold text-2xl text-center text-gray-800">
            Sign up to find work you love
          </h2>

          {/* Apple Sign-up Button */}
          <button className="flex justify-center items-center border-gray-300 bg-white hover:bg-gray-100 mb-4 py-3 border rounded-full w-full text-gray-800 text-sm transition duration-300">
            <img src={apple} alt="apple" className="mr-2 w-5 h-5" />
            Continue with Apple
          </button>

          {/* Google Sign-up Button */}
          <button className="flex justify-center items-center border-gray-300 bg-white mb-4 px-4 py-2 border rounded-full w-full text-gray-800">
            <img src={google} alt="Google" className="mr-2 h-6" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex justify-center items-center my-4">
            <div className="flex-1 bg-gray-300 h-px"></div>
            <span className="px-3 text-gray-500">or</span>
            <div className="flex-1 bg-gray-300 h-px"></div>
          </div>

          {/* Name Inputs */}
          <div className="flex justify-between gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="firstname" className="block mb-2 text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
                placeholder="Type here"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastname" className="block mb-2 text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
                placeholder="Type here"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full focus:outline-none"
              placeholder="Password (8 or more characters)"
            />
            <img
              src={passwordshow}
              alt="Show Password"
              className="top-9 right-3 absolute h-6 cursor-pointer"
              onClick={handlePasswordShow}
            />
          </div>

          {/* Terms of Service Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="checked"
              className="border-gray-300 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600"
            />
            <label
              htmlFor="checked"
              className="block ml-2 text-gray-900 text-sm cursor-pointer"
            >
              Yes, I agree to the freelance Terms of Service
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full w-full text-white transition-colors"
          >
            Create My Account
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/signin" className="text-indigo-600 hover:underline">
              Log In
            </a>
          </p>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-8 py-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Your Company. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Signup;
