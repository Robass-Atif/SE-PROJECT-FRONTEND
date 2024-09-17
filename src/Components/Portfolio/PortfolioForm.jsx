import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PortfolioForm = ({ closeModal, addPortfolioItem }) => {
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null);

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && role && description && skills && image) {
      const newPortfolioItem = {
        id: uuidv4(),
        title,
        role,
        description,
        skills,
        image: URL.createObjectURL(image), // Create a URL for the image to display locally
      };

      addPortfolioItem(newPortfolioItem);
      closeModal(); // Close the modal after submitting
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg mx-4 lg:mx-auto p-8 rounded-lg w-full max-w-4xl">
        <h2 className="mb-4 font-bold text-2xl">Add New Portfolio Item</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Title */}
          <div className="w-full">
            <label className="block font-semibold text-gray-700">
              Project Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Role */}
          <div className="w-full">
            <label className="block font-semibold text-gray-700">Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full"
              placeholder="Enter your role in the project"
              required
            />
          </div>

          {/* Description */}
          <div className="w-full">
            <label className="block font-semibold text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full"
              placeholder="Describe the project"
              rows="4"
              required
            />
          </div>

          {/* Skills */}
          <div className="w-full">
            <label className="block font-semibold text-gray-700">Skills</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="px-4 py-2 border rounded-lg w-full"
              placeholder="E.g., JavaScript, React, Node.js"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="w-full">
            <label className="block font-semibold text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="px-4 py-2 border rounded-lg w-full"
              required
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            >
              Add Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;
