import React from 'react';

const CompletedOrderCard = ({ order }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Client's Name */}
            <h3 className="text-lg font-bold">Client: {order.clientName}</h3>

            {/* Service Provided */}
            <p className="text-gray-600">Service: {order.service}</p>

            {/* Client's Rating */}
            <div className="flex items-center text-yellow-500">
                <p className="text-lg font-semibold">Rating: {order.rating} / 5</p>
                <svg className="w-5 h-5 fill-current text-yellow-500 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 3a1 1 0 011.902 0l1.025 3.157h3.299a1 1 0 01.592 1.81l-2.68 1.947 1.025 3.156a1 1 0 01-1.538 1.1L10 12.347l-2.672 1.923a1 1 0 01-1.537-1.1l1.024-3.156-2.68-1.947a1 1 0 01.593-1.81h3.298L9.049 3z"/>
                </svg>
            </div>

            {/* Client's Comment */}
            <p className="text-gray-600 italic mt-2">"{order.comment}"</p>
        </div>
    );
};

export default CompletedOrderCard;
