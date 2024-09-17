import React, { useState } from 'react';

const EditProfile = () => {
  // Dummy data for the prototype
  const [profile, setProfile] = useState({
    name: 'John Doe',
    description:
      'Experienced full-stack developer with expertise in building scalable web applications and APIs.',
    skills: ['JavaScript', 'React', 'Node.js', 'GraphQL'],
    languages: ['English', 'Spanish'],
    location: 'New York, USA',
    rate: '$50/hr',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image for profile picture
  });

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
          Edit Your Profile
        </h2>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-purple-400 shadow-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full cursor-pointer hover:bg-purple-600 transition duration-300"
          />
          <p className="text-gray-500 mt-2">Upload a new profile picture</p>
        </div>

        {/* Profile Name */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Profile Name</label>
          <input
            type="text"
            value={profile.name}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-4 focus:ring-purple-500"
            readOnly
          />
        </div>

        {/* Profile Description */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Description</label>
          <textarea
            rows="4"
            value={profile.description}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
            readOnly
          />
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Skills</label>
          <div className="flex flex-wrap mt-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-500 text-white text-lg font-semibold mr-3 mb-3 px-4 py-2 rounded-full shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Languages</label>
          <div className="flex flex-wrap mt-2">
            {profile.languages.map((language, index) => (
              <span
                key={index}
                className="bg-green-500 text-white text-lg font-semibold mr-3 mb-3 px-4 py-2 rounded-full shadow-lg"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Location</label>
          <input
            type="text"
            value={profile.location}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-4 focus:ring-purple-500"
            readOnly
          />
        </div>

        {/* Service Rate */}
        <div className="mb-6">
          <label className="text-lg text-gray-700 font-semibold">Service Rate</label>
          <input
            type="text"
            value={profile.rate}
            className="mt-2 p-4 w-full border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-4 focus:ring-purple-500"
            readOnly
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all shadow-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
