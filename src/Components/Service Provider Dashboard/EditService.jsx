import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../firebase";

const EditService = () => {
  const fileInputRef = useRef(null);
  const [fileProgress, setFileProgress] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(undefined);



  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;
  const serviceId = location.state?.service?._id;

  // Form state with pre-filled data
  const [formData, setFormData] = useState({
    serviceTitle: "",
    serviceCategory: "",
    servicePrice: "",
    deliveryTime: "",
    serviceDescription: "",
    coverImage: [],
    additionalFeatures: "",
    revisionCount: 1,
    serviceKeywords: "",
    serviceTags: "",
  });

  // Populate the form with the previous service data
  useEffect(() => {
    if (service) {
      setFormData({
        serviceTitle: service.title,
        serviceCategory: service.category,
        servicePrice: service.price,
        deliveryTime: service.deliveryTime,
        serviceDescription: service.description,
        additionalFeatures: service.additionalFeatures,
        revisionCount: service.revisionCount,
        serviceKeywords: service.serviceKeywords,
        serviceTags: service.serviceTags,
        coverImage: service.service_image,
      });
    }
  }, [service]);

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
  const handleServiceUpdate = async (updatedServiceData) => {
    if (formData.coverImage == null || formData.coverImage == undefined) {
      setFormData({
        serviceTitle: service.title,
        serviceCategory: service.category,
        servicePrice: service.price,
        deliveryTime: service.deliveryTime,
        serviceDescription: service.description,
        additionalFeatures: service.additionalFeatures,
        revisionCount: service.revisionCount,
        serviceKeywords: service.serviceKeywords,
        serviceTags: service.serviceTags,
        coverImage: "https://picsum.photos/id/237/200/300",
      });
    }
    try {
      const response = await fetch(
        `https://backend-qyb4mybn.b4a.run/serviceProvider/edit-service/${serviceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedServiceData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert("Service updated successfully!");
      navigate("/dashboard"); // Redirect after success
      return data;
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update service.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleServiceUpdate(formData);
  };

  // Handle cover image change
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileUpload(selectedFile); // Pass the selected file to handleFileUpload
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Service Title</label>
          <input
            type="text"
            value={formData.serviceTitle}
            onChange={(e) =>
              setFormData({ ...formData, serviceTitle: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Service Category</label>
          <input
            type="text"
            value={formData.serviceCategory}
            onChange={(e) =>
              setFormData({ ...formData, serviceCategory: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Service Price</label>
          <input
            type="text"
            value={formData.servicePrice}
            onChange={(e) =>
              setFormData({ ...formData, servicePrice: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Delivery Time</label>
          <input
            type="text"
            value={formData.deliveryTime}
            onChange={(e) =>
              setFormData({ ...formData, deliveryTime: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Service Description</label>
          <textarea
            value={formData.serviceDescription}
            onChange={(e) =>
              setFormData({ ...formData, serviceDescription: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold">Cover Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-semibold">Additional Features</label>
          <input
            type="text"
            value={formData.additionalFeatures}
            onChange={(e) =>
              setFormData({ ...formData, additionalFeatures: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-semibold">Revision Count</label>
          <input
            type="number"
            value={formData.revisionCount}
            onChange={(e) =>
              setFormData({
                ...formData,
                revisionCount: parseInt(e.target.value),
              })
            }
            className="w-full p-2 border rounded-lg"
            min="1"
          />
        </div>
        <div>
          <label className="block font-semibold">Service Keywords</label>
          <input
            type="text"
            value={formData.serviceKeywords}
            onChange={(e) =>
              setFormData({ ...formData, serviceKeywords: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-semibold">Service Tags</label>
          <input
            type="text"
            value={formData.serviceTags}
            onChange={(e) =>
              setFormData({ ...formData, serviceTags: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditService;
