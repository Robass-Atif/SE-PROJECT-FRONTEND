import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const fetchUserServices = async (userId) => {
    const response = await fetch(`https://backend-qyb4mybn.b4a.run/serviceProvider/get-user-services/${userId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const Services = () => {
    const { currentUser } = useSelector((state) => state.user);
    const userId = currentUser.data._id

    // Use the query to fetch services
    const { data: services = [], error, isLoading } = useQuery({
        queryKey: ['userServices', userId], // Use queryKey as an object
        queryFn: () => fetchUserServices(userId), // Use queryFn for fetch function
        onSuccess: (data) => {
            console.log("Fetched services data:", data);
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <div className="relative">
                <Link 
                    to="/manage-services" // Replace this with your manage services route
                    className="absolute top-0 right-0 text-custom-violet p-2 hover:underline"
                >
                    Manage Services
                </Link>
                <h2 className="text-xl font-semibold mb-4">Your Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                    {services.map(service => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;
