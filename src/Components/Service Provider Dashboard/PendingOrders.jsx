import React, { useState } from 'react';
import PendingOrderCard from './PendingOrderCard';

const PendingOrders = () => {
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

        {
            id: 3,
            customerName: "Jane Smith",
            service: "Plumbing",
            status: "Pending",
            timeframe: "17/09/2024 10:00 AM - 12:00 PM",
            clientsPrice: "$120"
        },

        {
            id: 4,
            customerName: "Jane Smith",
            service: "Plumbing",
            status: "Pending",
            timeframe: "17/09/2024 10:00 AM - 12:00 PM",
            clientsPrice: "$120"
        },
    ]);

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
        <>
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
        </>
    )
}

export default PendingOrders