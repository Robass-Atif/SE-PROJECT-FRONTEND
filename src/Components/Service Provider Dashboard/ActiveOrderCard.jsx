import React from 'react';

const ActiveOrderCard = ({ order }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Client's Name */}
            <h3 className="text-lg font-bold">Client: {order.clientName}</h3>

            {/* Service Provided */}
            <p className="text-gray-600">Service: {order.service}</p>

            {/* Time */}
            <p className="text-gray-600">Time: {order.time}</p>

            {/* Location */}
            <p className="text-gray-600">Location: {order.location}</p>

            {/* Price */}
            <p className="text-xl font-bold text-green-500">Price: {order.price}</p>

            {/* Client's Phone Number */}
            <p className="text-gray-600">Phone: {order.phoneNumber}</p>

            {/* Chat Button */}
            <div className="mt-4">
                <a 
                    href={order.chatLink} 
                    className="w-full inline-block px-4 py-2 bg-custom-violet text-white rounded-lg text-center"
                >
                    Chat with Client
                </a>
            </div>
        </div>
    );
};

export default ActiveOrderCard;
