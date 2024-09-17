import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md relative hover:shadow-lg transition-shadow">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-green-500 font-semibold mt-2">{service.price}</p>

        </div>
    );
};

export default ServiceCard;
