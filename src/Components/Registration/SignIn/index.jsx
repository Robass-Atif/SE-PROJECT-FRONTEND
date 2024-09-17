import React from "react";
import google from "../../../assets/google.svg";
import apple from "../../../assets/apple.png";
import passwordshow from "../../../assets/eye.png";

function SignIn() {
  return (
    <>
      {/* Main login form */}
      <main className="flex justify-center items-center bg-gray-50 p-4 min-h-screen">
        <form className="bg-white shadow-lg p-6 sm:p-8 rounded-lg w-full max-w-sm sm:max-w-md">
          <h3 className="mb-6 font-semibold text-black text-center text-xl sm:text-2xl">
            Log in to Your Account
          </h3>

          <div className="relative flex flex-col mb-4">
            <label
              htmlFor="username"
              className="mb-2 font-medium text-gray-700 text-sm sm:text-base"
            >
              Username or Email
            </label>
            <input
              type="email"
              id="username"
              placeholder="Email or phone"
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 w-full text-sm sm:text-base focus:outline-none"
            />
          </div>

          {/* Error message for email */}
          <span className="mb-4 text-red-500 text-xs sm:text-sm">
            Email error message goes here
          </span>

          <div className="relative flex flex-col mb-4">
            <label
              htmlFor="password"
              className="mb-2 font-medium text-gray-700 text-sm sm:text-base"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-green-500 w-full text-sm sm:text-base focus:outline-none"
            />
            <img
              src={passwordshow}
              alt="Show password"
              className="top-10 right-4 absolute w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Error message for password */}
          <span className="mb-4 text-red-500 text-xs sm:text-sm">
            Password error message goes here
          </span>

          <button
            type="submit"
            className="bg-[#5433FF] hover:bg-indigo-600 py-3 rounded-full w-full font-medium text-sm text-white sm:text-base transition duration-300"
          >
            Log In
          </button>

          <div className="flex items-center my-6 text-gray-500 text-xs sm:text-sm">
            <div className="bg-gray-300 w-full h-px"></div>
            <span className="mx-2">or</span>
            <div className="bg-gray-300 w-full h-px"></div>
          </div>

          <button className="flex justify-center items-center border-gray-300 bg-white hover:bg-gray-100 mb-4 py-3 border rounded-full w-full text-gray-800 text-sm sm:text-base transition duration-300">
            <img src={google} alt="Google" className="mr-2 w-5 h-5" />
            Continue with Google
          </button>

          <button className="flex justify-center items-center border-gray-300 bg-white hover:bg-gray-100 mb-4 py-3 border rounded-full w-full text-gray-800 text-sm sm:text-base transition duration-300">
            <img src={apple} alt="Apple" className="mr-2 w-5 h-5" />
            Continue with Apple
          </button>

          <div className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
            Don’t have an account?
            <a
              href="/signup"
              className="ml-1 font-medium hover:underline"
              style={{ color: "#5433FF" }}
            >
              Sign Up now
            </a>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 py-4 w-full text-white">
        <div className="mx-auto text-center container">
          <p className="text-xs sm:text-sm">
            © 2024 Your App. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default SignIn;
