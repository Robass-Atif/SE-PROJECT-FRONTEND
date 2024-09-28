import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const fetchUserServices = async (userId) => {
    const response = await fetch(`https://backend-qyb4mybn.b4a.run/serviceProvider/get-user-services/${userId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const deleteUserService = async (serviceId) => {
    const response = await fetch(`https://backend-qyb4mybn.b4a.run/serviceProvider/delete-service/${serviceId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Error deleting the service');
    }
    return response.json();
};

const ManageServices = () => {
    const { currentUser } = useSelector((state) => state.user);
    const userId = currentUser.data._id
    const [confirmDelete, setConfirmDelete] = useState({ show: false, serviceId: null });
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Use TanStack Query to fetch services
    const { data: services = [], error, isLoading } = useQuery({
        queryKey: ['userServices', userId],
        queryFn: () => fetchUserServices(userId),
    });

    // Use mutation for deleting a service
    const deleteMutation = useMutation({
        mutationFn: deleteUserService,
        onSuccess: () => {
            queryClient.invalidateQueries(['userServices', userId]);
            toast.success('Service Deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        },
        onError: (error) => {
            toast.error(`Failed to add service: ${error}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
    });

    const handleDeleteClick = (serviceId) => {
        setConfirmDelete({ show: true, serviceId });
    };

    const handleConfirmDelete = () => {
        if (confirmDelete.serviceId) {
            deleteMutation.mutate(confirmDelete.serviceId);
            setConfirmDelete({ show: false, serviceId: null });
        }
    };

    const handleEdit = (service) => {
        navigate(`/edit-service/`, { state: { service }, serviceId: service.id });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="p-6">
            <ToastContainer />
            {/* Back Link */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Manage Your Services</h1>
                <Link to="/dashboard" className="text-custom-violet hover:underline">
                    ← Back to Dashboard
                </Link>
            </div>

            {/* Add New Service Button */}
            <div className="mb-6">
                <Link to="/addservice">
                    <button className="bg-custom-violet text-white py-2 px-4 rounded-lg hover:bg-opacity-90">
                        Add New Service
                    </button>
                </Link>
            </div>

            {/* Services Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4 font-semibold">Title</th>
                            <th className="py-3 px-4 font-semibold">Category</th>
                            <th className="py-3 px-4 font-semibold">Price</th>
                            <th className="py-3 px-4 font-semibold">Delivery Time</th>
                            <th className="py-3 px-4 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service => (
                            <tr key={service.id} className="border-b">
                                <td className="py-3 px-4">{service.title}</td>
                                <td className="py-3 px-4">{service.category}</td>
                                <td className="py-3 px-4">{service.price}</td>
                                <td className="py-3 px-4">{service.deliveryTime}</td>
                                <td className="py-3 px-4">
                                    {/* Edit and Delete Buttons */}
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(service._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Confirmation Pop-up */}
            {confirmDelete.show && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Are you sure you want to delete this service?</h3>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setConfirmDelete({ show: false, serviceId: null })}
                                className="bg-gray-400 text-white py-2 px-4 rounded-lg mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmDelete}
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageServices;
