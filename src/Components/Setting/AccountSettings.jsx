import React, { useState } from "react";

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic
  };

  return (
    <>
      {/* Heading */}
      <h2 className="font-bold text-3xl text-center text-gray-900 md:text-4xl">
        Account Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 w-full">
        {/* Current Password */}
        <div className="flex flex-col">
          <label className="font-semibold text-base text-gray-600 md:text-lg">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="border-gray-300 mt-2 p-2 md:p-3 border rounded-lg focus:ring focus:ring-blue-200 w-full focus:outline-none"
            placeholder="Enter your current password"
            required
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col">
          <label className="font-semibold text-base text-gray-600 md:text-lg">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border-gray-300 mt-2 p-2 md:p-3 border rounded-lg focus:ring focus:ring-blue-200 w-full focus:outline-none"
            placeholder="Enter a new password"
            required
          />
        </div>

        {/* Confirm New Password */}
        <div className="flex flex-col">
          <label className="font-semibold text-base text-gray-600 md:text-lg">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-gray-300 mt-2 p-2 md:p-3 border rounded-lg focus:ring focus:ring-blue-200 w-full focus:outline-none"
            placeholder="Confirm your new password"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full max-w-xs font-semibold text-white focus:outline-none transition duration-300 ease-in-out"
          >
            Change Password
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountSettings;
