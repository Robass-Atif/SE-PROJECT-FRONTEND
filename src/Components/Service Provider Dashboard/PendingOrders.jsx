import React, { useState } from 'react';
import PendingOrderCard from './PendingOrderCard';

const PendingOrders = ({pendingOrdersArr , onUpdate}) => {

    const [pendingOrders, setPendingOrders] = useState(pendingOrdersArr);

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
                        key={order._id}
                        order={order}
                        onRespond={handleOrderResponse}
                        onUpdate = {onUpdate}
                    />
                ))}
            </div>
        </>
    )
}

export default PendingOrders