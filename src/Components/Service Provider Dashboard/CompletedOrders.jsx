import React, { useState } from 'react';
import CompletedOrderCard from './CompletedOrderCard';

const CompletedOrders = () => {
    // Sample data for completed orders
    const [completedOrders, setCompletedOrders] = useState([
        {
            id: 1,
            clientName: "Alice Johnson",
            service: "Electrical Repair",
            rating: 4.7,
            comment: "Great work! The electrician was very professional and quick."
        },
        {
            id: 2,
            clientName: "Michael Brown",
            service: "Plumbing",
            rating: 5.0,
            comment: "Amazing service! Highly recommend!"
        }
    ]);

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Completed Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {completedOrders.map(order => (
                    <CompletedOrderCard 
                        key={order.id} 
                        order={order} 
                    />
                ))}
            </div>
        </>
    );
};

export default CompletedOrders;
