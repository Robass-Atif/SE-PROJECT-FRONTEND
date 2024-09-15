import React from 'react';

const ServiceCard = ({ service, deleteService }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-green-500 font-semibold mt-2">{service.price}</p>

            {/* Delete Button */}
            <button
                onClick={() => deleteService(service.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};

export default ServiceCard;
