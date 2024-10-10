import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesCard from '../Components/Services/ServicesCard';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../Components/loader';

const getServices = async () => {
    const response = await axios.get(`https://backend-qyb4mybn.b4a.run/serviceProvider/get-all-services`);
    return response.data;
};

const getUser = async (user_id) => {
    const response = await fetch(`https://backend-qyb4mybn.b4a.run/profile/user/${user_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


const Services = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const { data: servicesData, error: servicesError, isLoading: servicesLoading } = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    });


    if (servicesLoading) {
        return <Loader />;
    }
    else {
        console.log(servicesData)

    }


    if (servicesError) {
        return <div>Error: {userError?.message || servicesError?.message}</div>;
    }


    const handleCardClick = (service) => {
        navigate(`/service-details/${service._id}`, { state: { service } });
    };

    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                    <h2 className="text-3xl font-bold mb-6">Services You May Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {servicesData
                            .filter(service => service.user_id !== null) // Filter services where user_id is not null
                            .map((service, index) => (
                                <ServicesCard
                                    key={service._id}
                                    name={service.user_id.name}
                                    description={service.description}
                                    title={service.title}
                                    price={service.price}
                                    thumbnail={service.service_images}
                                    profileImage={service.user_id.profile_image}
                                    rating={'0'}
                                    numberOfRatings={'0'}
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
