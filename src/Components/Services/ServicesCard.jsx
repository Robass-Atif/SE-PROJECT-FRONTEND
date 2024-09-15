import React from 'react'

const ServicesCard = ({ title, description, price, image }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="text-lg font-bold">{price}</div>
        </div>
    </div>
);

export default ServicesCard
