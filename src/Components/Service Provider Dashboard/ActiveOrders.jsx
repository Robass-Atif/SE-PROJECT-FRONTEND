import React, { useState } from 'react';
import ActiveOrderCard from './ActiveOrderCard';

const ActiveOrders = () => {
    // Sample data for active orders
    const [activeOrders, setActiveOrders] = useState([
        {
            id: 1,
            clientName: "Emma Watson",
            service: "Plumbing",
            time: "16/09/2024 10:00 AM - 12:00 PM",
            location: "123 Main St, New York, NY",
            price: "$150",
            phoneNumber: "555-1234",
            chatLink: "/chat/1"
        },
        {
            id: 2,
            clientName: "Chris Evans",
            service: "Electrical Repair",
            time: "17/09/2024 2:00 PM - 4:00 PM",
            location: "456 Elm St, Brooklyn, NY",
            price: "$120",
            phoneNumber: "555-5678",
            chatLink: "/chat/2"
        },
        {
            id: 3,
            clientName: "Scarlett Johnson",
            service: "Electrical Repair",
            time: "17/09/2024 2:00 PM - 4:00 PM",
            location: "456 Elm St, Brooklyn, NY",
            price: "$120",
            phoneNumber: "555-5678",
            chatLink: "/chat/2"
        }
    ]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Active Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeOrders.map(order => (
                    <ActiveOrderCard 
                        key={order.id} 
                        order={order} 
                    />
                ))}
            </div>
        </>
    );
};

export default ActiveOrders;
