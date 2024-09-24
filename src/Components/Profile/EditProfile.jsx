import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState('');
  const [showCustomSkillInput, setShowCustomSkillInput] = useState(false);

  const languages = ['English', 'Spanish', 'French', 'German', 'Hindi'];
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'Other'];

  const onSubmit = (data) => {
    const profileData = {
      ...data,
      profileImage, // Include the profile image URL
      skills: selectedSkills, // Include selected skills
      languages: selectedLanguages, // Include selected languages
    };
  
    console.log(profileData);
    // Here you can send profileData to your backend or wherever you need to store it
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    if (lang && !selectedLanguages.includes(lang)) {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (skill === 'Other') {
      setShowCustomSkillInput(true);
    } else if (skill && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setShowCustomSkillInput(false);
    }
  };

  const handleCustomSkillInput = (e) => {
    if (e.key === 'Enter' && customSkill.trim()) {
      if (!selectedSkills.includes(customSkill.trim())) {
        setSelectedSkills([...selectedSkills, customSkill.trim()]);
      }
      setCustomSkill('');
    }
  };

  const removeItem = (item, type) => {
    if (type === 'language') {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== item));
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== item));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        
        <div className="flex justify-center mb-4">
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              className="absolute w-full h-full opacity-0"
              accept="image/*"
              onChange={handleFileInputChange}
            />
            <img
              src={profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover cursor-pointer mb-4"
              onClick={handleImageClick}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          {/* First Name */}
          <div className="mb-4 w-full">
            <input
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
              id="firstName"
              placeholder="First Name"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div className="mb-4 w-full">
            <input
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
              id="lastName"
              placeholder="Last Name"
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
          </div>

          {/* Address */}
          <div className="mb-4 w-full">
            <input
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
              id="address"
              placeholder="Address"
              {...register('address', { required: 'Address is required' })}
            />
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
          </div>

          {/* Profile Description */}
          <div className="mb-4 w-full">
            <textarea
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none"
              id="profileDescription"
              placeholder="Profile Description"
              {...register('profileDescription', { required: 'Profile Description is required' })}
            />
            {errors.profileDescription && <p className="text-red-500 text-xs italic">{errors.profileDescription.message}</p>}
          </div>

          {/* Languages Section */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Languages</label>
            <select
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
              onChange={handleLanguageChange}
              defaultValue=""
            >
              <option value="" disabled>Select a language</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedLanguages.map((lang) => (
                <div
                  key={lang}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center"
                >
                  {lang}
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => removeItem(lang, 'language')}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
            <select
              className="border-gray-300 p-3 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full text-sm sm:text-base focus:outline-none pr-10"
              onChange={handleSkillChange}
              defaultValue=""
            >
              <option value="" disabled>Select a skill</option>
              {skills.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>

            {/* Show input for custom skill when "Other" is selected */}
            {showCustomSkillInput && (
              <input
                type="text"
                className="border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-custom-violet w-full mt-2"
                placeholder="Add Custom Skill"
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                onKeyDown={handleCustomSkillInput}
              />
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => removeItem(skill, 'skill')}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-full">
          <button className="bg-[#5469D4] hover:bg-[#4353A3] mt-4 px-4 py-2 rounded-lg text-white transition duration-300">
          Save Changes
        </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
