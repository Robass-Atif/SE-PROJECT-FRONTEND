import React, { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { Navigate, useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../firebase";

const AddServiceMultiStepForm = () => {
  const navigate = useNavigate()

  const fileInputRef = useRef(null);
  const [fileProgress, setFileProgress] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(undefined);

  const [step, setStep] = useState(1);

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
    serviceLocation: "",
    availabilityStart: "",
    availabilityEnd: "",
    detailedPricing: "",
  });

  const handleFileUpload = (file) => {
    console.log(file);
    setIsUploading(true); // Set uploading flag to true
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const fileRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileProgress(Math.round(progress));
        console.log(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        setIsUploading(false); // Reset uploading flag on error
        console.error("Upload error:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log("File available at:", downloadUrl);
          setFormData((prevFormData) => ({
            ...prevFormData,
            coverImage: downloadUrl,
          }));
          setIsUploading(false); // Reset uploading flag after upload completes
          setFile(null); // Reset file state to prevent re-triggering
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileUpload(selectedFile); // Pass the selected file to handleFileUpload
    }
  };

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleServiceAdd = async () => {
    const userId = "66f2c46b560c53a133c31dfb";
    const dataToSend = { formData, userId };
    try {
      const response = await fetch(
        "https://backend-qyb4mybn.b4a.run/serviceProvider/add-service",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Service Added successfully!");
      navigate("/dashboard"); // Redirect after success
      return data;
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to added service.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = "66f2c46b560c53a133c31df9";
    setFormData({
      ...formData,
      user_id: userId,
    });
    // Use the mutation to send data
    if (step === 6) {
      handleServiceAdd();
    }

    // Submit logic without alert
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
                <label
                  htmlFor="serviceTitle"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="serviceCategory"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="servicePrice"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="deliveryTime"
                  className="block text-gray-700 font-medium mb-2"
                >
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

              <div>
                <label
                  htmlFor="detailedPricing"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Detailed Pricing (Optional)
                </label>
                <textarea
                  id="detailedPricing"
                  name="detailedPricing"
                  value={formData.detailedPricing}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  rows="3"
                  placeholder="Enter detailed pricing options if any"
                />
              </div>
            </div>
          )}

          {/* Step 3: Service Description */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="serviceDescription"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="additionalFeatures"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="serviceKeywords"
                  className="block text-gray-700 font-medium mb-2"
                >
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
                <label
                  htmlFor="serviceTags"
                  className="block text-gray-700 font-medium mb-2"
                >
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

          {/* Step 5: Location and Availability */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="serviceLocation"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Service Location
                </label>
                <input
                  type="text"
                  id="serviceLocation"
                  name="serviceLocation"
                  value={formData.serviceLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Enter service location"
                />
              </div>

              <div>
                <label
                  htmlFor="availabilityStart"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Availability Start Time
                </label>
                <input
                  type="time"
                  id="availabilityStart"
                  name="availabilityStart"
                  value={formData.availabilityStart}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="availabilityEnd"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Availability End Time
                </label>
                <input
                  type="time"
                  id="availabilityEnd"
                  name="availabilityEnd"
                  value={formData.availabilityEnd}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {/* Step 6: Cover Image Upload */}
          {step === 6 && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="coverImage"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Upload Cover Image
                </label>
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md"
              >
                Previous
              </button>
            )}

            {step < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md"
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
