import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHandshake, FaEnvelope } from 'react-icons/fa'; // Import icons
import HireModal from './HireModal'; // Import the modal component
import socket from '../sockets/socket';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

const ServiceDetails = () => {
    const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.user)
    const userId = currentUser._id
    const reviews = [
        { clientName: "John Smith", rating: 5, comment: "Great job!", timestamp: "2024-09-01T14:00:00Z" },
        { clientName: "Alice Brown", rating: 4, comment: "Good work but could improve communication.", timestamp: "2024-09-02T10:00:00Z" }
    ];

    const location = useLocation();
    const { service } = location.state || {};
    const receiveId = service.user_id._id
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    if (!service) return <p>No service data available</p>;

    const handleContactClick = () => {
        if (!socket.connected) {
            console.error("Socket not connected");
            return;
        }

        // Trigger the createChat event when the user clicks Contact
        socket.emit("createChat", { senderId: userId, receiverId: receiveId });
        // Listen for either the existing or newly created chat
        socket.on("chatExists", (chat) => {
            const chatId = chat._id; // Extract chat ID
            socket.emit("joinRoom", chat._id);
            navigate(`/message/id?query=${encodeURIComponent(chatId)}`); // Navigate to the messageSection with chat ID
        });
        socket.on("chatCreated", (newChat) => {
            const chatId = newChat._id; // Extract chat ID
            socket.emit("joinRoom", newChat._id);
            navigate(`/message/id?query=${encodeURIComponent(chatId)}`);
        });
      };

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl">
            <div className="flex flex-col md:flex-row">
                {/* Main content on the left */}
                <div className="flex-1 md:mr-8">
                    <h1 className="text-2xl font-bold mb-4">{service.title}</h1>

                    <img
                        src={service.service_images}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-md mb-4"
                    />

                    
                    <p className="text-xl font-bold mb-4">From Price: Rs {service.price}</p>
                    <p className="text-xl font-bold mb-4">No of revisions: Rs {service.revision_count}</p>


                    <div className="flex items-center mb-4">
                        <Link to='/profile'>
                            <img
                                src={service.user_id.profile_image}
                                alt={service.name}
                                className="w-12 h-12 rounded-full mr-2"
                            />
                        </Link>
                        <div className="text-lg font-semibold">{service.user_id.name}</div>
                    </div>

                    <div className="text-sm mb-4 flex items-center">
                        <span className="text-yellow-400 text-xl mr-1">★</span> {/* Single star */}
                        <span className="mr-2">{service.rating}</span> {/* Rating value */}
                        <span className="text-gray-500">({service.numberOfRatings} ratings)</span> {/* Number of ratings */}
                    </div>

                    <div className="flex gap-4 mb-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-1/2 bg-green-500 hover:bg-green-600 py-3 rounded-full flex items-center justify-center font-medium text-sm text-white sm:text-base transition duration-300"
                        >
                            <FaHandshake className="mr-2" /> Hire
                        </button>

                        <button
                            onClick={handleContactClick}
                            className="w-1/2" // Ensure the Link behaves like a block element
                        >
                            <div className="w-full bg-[#5433FF] hover:bg-indigo-600 py-3 rounded-full flex items-center justify-center font-medium text-sm text-white sm:text-base transition duration-300">
                                <FaEnvelope className="mr-2" /> Contact
                            </div>
                        </button>
                    </div>

                </div>

                {/* About My Services section on the right */}
                <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
                    <h2 className="text-xl font-semibold mb-2">About My Services</h2>
                    <p className="text-lg">
                        {service.description}
                    </p>
                    <h2 className="text-xl font-semibold mt-3 mb-2">Previous Reviews</h2>
                    <div className="space-y-4">
                        {reviews.length ? (
                            reviews.map((review, index) => (
                                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-sm font-bold">{review.clientName}</div>
                                        <div className="text-sm text-gray-500">{new Date(review.timestamp).toLocaleDateString()}</div>
                                    </div>
                                    <div className="text-yellow-500">
                                        {Array(review.rating).fill('★').join('')}
                                        {Array(5 - review.rating).fill('☆').join('')}
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for Hiring */}
            {isModalOpen && <HireModal onClose={() => setIsModalOpen(false)} service={service} />}
        </div>
    );
};

export default ServiceDetails;
