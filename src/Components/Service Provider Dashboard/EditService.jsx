import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const EditService = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const service = location.state?.service;

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
                coverImage: null,
            });
        }
    }, [service]);

    // Mutation for updating the service
    const mutation = useMutation({
        mutationFn: async (updatedServiceData) => {
            const serviceId = '66f2c46c560c53a133c31dfe'; // Use the correct property for the service ID
            const response = await fetch(`http://localhost:8080/serviceProvider/edit-service/${serviceId}`, {
                method: 'PATCH',
                body: updatedServiceData, // Send FormData directly
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json();
        },
        onSuccess: () => {
            alert("Service updated successfully!");
            navigate("/dashboard"); // Redirect after success
        },
        onError: (error) => {
            console.error("Error updating service:", error);
            alert("Failed to update service.");
        },
    });

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare data to send to the backend using FormData
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.serviceTitle);
        formDataToSend.append("category", formData.serviceCategory);
        formDataToSend.append("price", formData.servicePrice);
        formDataToSend.append("delivery_time", formData.deliveryTime);
        formDataToSend.append("description", formData.serviceDescription);
        formDataToSend.append("service_images", formData.coverImage);
        formDataToSend.append("additionalFeatures", formData.additionalFeatures);
        formDataToSend.append("revisionCount", formData.revisionCount);
        formDataToSend.append("serviceKeywords", formData.serviceKeywords);
        formDataToSend.append("serviceTags", formData.serviceTags);

        // Use the mutation to send data
        mutation.mutate(formDataToSend);
    };

    // Handle cover image change
    const handleImageChange = (e) => {
        setFormData({ ...formData, coverImage: e.target.files[0] });
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
                        onChange={(e) => setFormData({ ...formData, serviceTitle: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Service Category</label>
                    <input
                        type="text"
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Service Price</label>
                    <input
                        type="text"
                        value={formData.servicePrice}
                        onChange={(e) => setFormData({ ...formData, servicePrice: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Delivery Time</label>
                    <input
                        type="text"
                        value={formData.deliveryTime}
                        onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold">Service Description</label>
                    <textarea
                        value={formData.serviceDescription}
                        onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, additionalFeatures: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Revision Count</label>
                    <input
                        type="number"
                        value={formData.revisionCount}
                        onChange={(e) => setFormData({ ...formData, revisionCount: parseInt(e.target.value) })}
                        className="w-full p-2 border rounded-lg"
                        min="1"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Service Keywords</label>
                    <input
                        type="text"
                        value={formData.serviceKeywords}
                        onChange={(e) => setFormData({ ...formData, serviceKeywords: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Service Tags</label>
                    <input
                        type="text"
                        value={formData.serviceTags}
                        onChange={(e) => setFormData({ ...formData, serviceTags: e.target.value })}
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
