import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Electrical Repair",
            description: "Expert electrical repair services to fix any issues in your home or office.",
            price: "$150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
        },
        {
            id: 2,
            title: "Plumbing",
            description: "Reliable plumbing services to handle all your pipe and fixture needs.",
            price: "$120",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
        },
        {
            id: 3,
            title: "Plumbing",
            description: "Reliable plumbing services to handle all your pipe and fixture needs.",
            price: "$120",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU"
        }
    ]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Your Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </>
    );
}

export default Services;