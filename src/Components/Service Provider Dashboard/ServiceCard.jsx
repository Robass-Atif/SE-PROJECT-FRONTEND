import React from 'react';

const ServiceCard = ({ service }) => {
    let image;
    if (service && service.service_images && service.service_images[0])
    {
        image = service.service_images[0] 
    }

    else
    {
        image = 'https://via.placeholder.com/150'
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow-md relative hover:shadow-lg transition-shadow">
            <img
                src={image}
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
