import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesCard from '../Components/Services/ServicesCard';
import { useSelector, useDispatch } from 'react-redux';




const services = [
    {
        id: 1,
        name: "John Doe",
        description: "Expert electrical repair services.",
        price: 150,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 4.5,
        numberOfRatings: 120,
        title: 'I will create custom ai art using ai tools'
    },
    {
        id: 2,
        name: "Jane Smith",
        description: "Reliable plumbing services.",
        price: 120,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU",
        profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4.2,
        numberOfRatings: 98,
        title: 'I will create custom ai art using ai tools'

    },
    {
        id: 4,
        name: "Sarah Lee",
        description: "Thorough cleaning services.",
        price: 100,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU",
        profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4.7,
        numberOfRatings: 85,
        title: 'I will create custom ai art using ai tools'
    },

    {
        id: 8,
        name: "Emily Clark",
        description: "Effective pest control services.",
        price: 90,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFK8Yjbmd3MRLSCQr8wL9KwEuP7UG-mMpOw&usqp=CAU",
        profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 4.5,
        numberOfRatings: 70,
        title: 'I will create custom ai art using ai tools'

    },
];

const Services = () => {
    
    const navigate = useNavigate();

    
    const handleCardClick = (service) => {
        navigate(`/service-details/${service.id}`, { state: { service } });
    };

    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6">Services You May Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {services.map(service => (
                            <ServicesCard
                                key={service.id}
                                name={service.name}
                                description={service.description}
                                title={service.title}
                                price={service.price}
                                thumbnail={service.thumbnail}
                                profileImage={service.profileImage}
                                rating={service.rating}
                                numberOfRatings={service.numberOfRatings}
                                onClick={() => handleCardClick(service)} // Pass click handler
                            />
                        ))}
                    </div>
                </div>
            </section>
            {/* Repeat similar sections as needed */}
        </>
    );
};

export default Services;
