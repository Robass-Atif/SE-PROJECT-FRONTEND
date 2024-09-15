import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full shadow-lg"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">Full Stack Developer | Tech Enthusiast</p>
        </div>

        {/* Profile Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <h4 className="text-xl font-bold text-gray-800">120</h4>
            <p className="text-gray-500">Followers</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800">200</h4>
            <p className="text-gray-500">Following</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800">45</h4>
            <p className="text-gray-500">Posts</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full">
            Edit Profile
          </button>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">About</h3>
          <p className="text-gray-600 mt-2">
            I'm a full-stack developer with 5 years of experience building web applications. 
            Passionate about coding, open-source, and solving complex problems.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-red-500 hover:text-red-700">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
