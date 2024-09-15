import React, { useState } from 'react';
import ServiceCard from './Card';
import PendingOrderCard from './PendingOrderCard';

const ServiceProviderDashboard = () => {
    // Initial services array
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
        }
    ]);
    

    const [pendingOrders, setPendingOrders] = useState([
        // Initial pending orders array
        {
            id: 1,
            customerName: "John Doe",
            service: "Electrical Repair",
            status: "Pending",
            timeframe: "16/09/2024 10:00 AM - 12:00 PM",
            clientsPrice: "$100"
        },
        {
            id: 2,
            customerName: "Jane Smith",
            service: "Plumbing",
            status: "Pending",
            timeframe: "17/09/2024 10:00 AM - 12:00 PM",
            clientsPrice: "$120"
        },
    ]);

    const [earnings, setEarnings] = useState(500);

    const [newService, setNewService] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });

    // Handle input change for new service form
    const handleInputChange = (e) => {
        setNewService({
            ...newService,
            [e.target.name]: e.target.value
        });
    };

    // Add a new service
    const addService = (e) => {
        e.preventDefault();
        if (newService.title && newService.description && newService.price && newService.image) {
            setServices([
                ...services,
                {
                    id: services.length + 1,
                    ...newService
                }
            ]);
            setNewService({ title: '', description: '', price: '', image: '' });
        } else {
            alert('Please fill in all fields');
        }
    };

    // Delete a service
    const deleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };

    // Handle response to pending orders
    const handleOrderResponse = (orderId, response, scheduleDetails = null) => {
        const updatedOrders = pendingOrders.map(order => {
            if (order.id === orderId) {
                if (response === 'Accept') {
                    return { ...order, status: 'Accepted' };
                } else if (response === 'Reject') {
                    return { ...order, status: 'Rejected' };
                } else if (response === 'Schedule' && scheduleDetails) {
                    return { 
                        ...order, 
                        status: `Scheduled on ${scheduleDetails.date} at ${scheduleDetails.time}` 
                    };
                }
            }
            return order;
        });
        setPendingOrders(updatedOrders);
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>

            {/* Service List */}
            <h2 className="text-xl font-semibold mb-4">Your Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {services.map(service => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        deleteService={deleteService}
                    />
                ))}
            </div>

            {/* Pending Orders Section */}
            <h2 className="text-xl font-semibold mb-4">Pending Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {pendingOrders.map(order => (
                    <PendingOrderCard
                        key={order.id}
                        order={order}
                        onRespond={handleOrderResponse}
                    />
                ))}
            </div>

            {/* Earnings Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Total Earnings</h2>
                <p className="text-2xl font-bold text-green-500">${earnings}</p>
            </div>
        </div>
    );
};

export default ServiceProviderDashboard;

