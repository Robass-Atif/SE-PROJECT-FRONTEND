import React, { useState } from 'react';

const AddServiceForm = ({ onAddService }) => {
    const [newService, setNewService] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        setNewService({
            ...newService,
            [e.target.name]: e.target.value
        });
    };

    // Add a new service
    const addService = (e) => {
        e.preventDefault();
        if (newService.title && newService.description && newService.price && newService.image) {
            onAddService(newService);
            setNewService({ title: '', description: '', price: '', image: '' });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={addService} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Service Title</label>
                    <input
                        type="text"
                        name="title"
                        value={newService.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Service Price</label>
                    <input
                        type="text"
                        name="price"
                        value={newService.price}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Service Description</label>
                <textarea
                    name="description"
                    value={newService.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Service Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={newService.image}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mt-6">
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                >
                    Add Service
                </button>
            </div>
        </form>
    );
};

export default AddServiceForm;
