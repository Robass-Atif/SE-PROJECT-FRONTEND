import React from 'react';
import { useSelector } from 'react-redux';

const ActiveOrderCard = ({ order }) => {

    const { currentUser } = useSelector((state) => state.user);

    const user_id = currentUser._id;
    const user_type = currentUser.type;
    

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Client's Name */}
            <h3 className="text-lg font-bold">{user_type == 'buyer' ? 'Service Provider: ' : 'Client: '} {user_type == 'buyer' ? order.service_provider_id.name : order.buyer_id.name}</h3>

            {/* Service Provided */}
            <p className="text-gray-600">Service: {order.description}</p>

            {/* Time */}
            <p className="text-gray-600">Time: {order.accepted_by == 'buyer' ? order.service_provider_time : order.appointment_time}</p>
            <p className="text-gray-600">Date: {order.accepted_by == 'buyer' ? new Date(order.service_provider_date).toLocaleDateString('en-GB') : new Date(order.appointment_date).toLocaleDateString('en-GB')}</p>


            {/* Price */}
            <p className="text-xl font-bold text-green-500">Price: {order.accepted_by == 'buyer' && order.service_provider_price !=0 ? order.service_provider_price : order.price}</p>

            

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
