import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      {/* Profile Picture and Name */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">Robass A.</h2>
          <p className="text-gray-500">Lahore Cantt, Pakistan – 1:20 pm local time</p>
        </div>
      </div>

      {/* Profile Status */}
      <div className="mt-4 flex items-center justify-between">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
          See public view
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded-lg">Profile settings</button>
      </div>

      {/* Profile Information */}
      <div className="mt-4 border-t pt-4">
        <h3 className="text-lg font-semibold">Software and Desktop Developer and Data Entry</h3>
        <p className="text-gray-500 mt-2">
          A frontend developer is a professional who specializes in creating the user interface and
          user experience of a website or application...
        </p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold">$5.00/hr</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Share</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
