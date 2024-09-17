import React, { useState } from "react";

const ProfileSettings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 rounded-full w-32 h-32">
            [Profile Picture]
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
            Upload
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded-lg">Edit</button>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block mt-1 p-2 border rounded-lg w-full"
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block mt-1 p-2 border rounded-lg w-full"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="block mt-1 p-2 border rounded-lg w-full"
            placeholder="Tell us about yourself"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-lg text-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
