import React, { useState } from "react";

const AddServiceMultiStepForm = () => {
  const [step, setStep] = useState(1);

  // Form State for each step
  const [formData, setFormData] = useState({
    serviceTitle: "",
    serviceCategory: "",
    servicePrice: "",
    deliveryTime: "",
    serviceDescription: "",
    coverImage: null,
    additionalFeatures: "",
    revisionCount: 1,
    serviceKeywords: "",
    serviceTags: "",
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change for cover image
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0], // Store the selected image file
    });
  };

  // Navigation functions for next and previous steps
  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Final submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Service added successfully!");
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Service
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Service Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="serviceTitle" className="block text-gray-700 font-medium mb-2">
                  Service Title
                </label>
                <input
                  type="text"
                  id="serviceTitle"
                  name="serviceTitle"
                  value={formData.serviceTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter service title"
                />
              </div>

              <div>
                <label htmlFor="serviceCategory" className="block text-gray-700 font-medium mb-2">
                  Service Category
                </label>
                <select
                  id="serviceCategory"
                  name="serviceCategory"
                  value={formData.serviceCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                >
                  <option value="">Select Category</option>
                  <option value="webDevelopment">Web Development</option>
                  <option value="graphicDesign">Graphic Design</option>
                  <option value="seo">SEO</option>
                  <option value="contentWriting">Content Writing</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Pricing Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="servicePrice" className="block text-gray-700 font-medium mb-2">
                  Service Price (USD)
                </label>
                <input
                  type="number"
                  id="servicePrice"
                  name="servicePrice"
                  value={formData.servicePrice}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter service price"
                />
              </div>

              <div>
                <label htmlFor="deliveryTime" className="block text-gray-700 font-medium mb-2">
                  Delivery Time (Days)
                </label>
                <input
                  type="number"
                  id="deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter delivery time in days"
                />
              </div>
            </div>
          )}

          {/* Step 3: Service Description */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="serviceDescription" className="block text-gray-700 font-medium mb-2">
                  Service Description
                </label>
                <textarea
                  id="serviceDescription"
                  name="serviceDescription"
                  value={formData.serviceDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  rows="4"
                  placeholder="Enter service description"
                />
              </div>

              <div>
                <label htmlFor="additionalFeatures" className="block text-gray-700 font-medium mb-2">
                  Additional Features (Optional)
                </label>
                <textarea
                  id="additionalFeatures"
                  name="additionalFeatures"
                  value={formData.additionalFeatures}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  rows="3"
                  placeholder="Enter additional features (if any)"
                />
              </div>
            </div>
          )}

          {/* Step 4: Keywords and Tags */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="serviceKeywords" className="block text-gray-700 font-medium mb-2">
                  Service Keywords
                </label>
                <input
                  type="text"
                  id="serviceKeywords"
                  name="serviceKeywords"
                  value={formData.serviceKeywords}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter relevant keywords"
                />
              </div>

              <div>
                <label htmlFor="serviceTags" className="block text-gray-700 font-medium mb-2">
                  Service Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  id="serviceTags"
                  name="serviceTags"
                  value={formData.serviceTags}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter tags separated by commas"
                />
              </div>
            </div>
          )}

          {/* Step 5: Cover Image Upload */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="coverImage" className="block text-gray-700 font-medium mb-2">
                  Upload Cover Image
                </label>
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
                {formData.coverImage && (
                  <p className="text-green-500 mt-2">Image selected: {formData.coverImage.name}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200 mb-2 md:mb-0"
              >
                Previous
              </button>
            )}
            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 mb-2 md:mb-0"
              >
                Next
              </button>
            )}
            {step === 5 && (
              <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceMultiStepForm;
