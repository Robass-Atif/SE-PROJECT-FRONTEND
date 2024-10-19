import React, { useState } from 'react';
import Services from './CurrentServices';
import PendingOrders from './PendingOrders';
import Earnings from './Earning';
import UserProfile from './UserProfile';
import CompletedOrders from './CompletedOrders';
import ActiveOrders from './ActiveOrders';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import Loader from '../loader';

const getPending = async (user_id, user_type) => {
    const response = await axios.get(`https://backend-qyb4mybn.b4a.run/order/pending?user_type=${user_type}&user_id=${user_id}`);
    return response.data;
};

const getInProgress = async (user_id, user_type) => {
    const response = await axios.get(`https://backend-qyb4mybn.b4a.run/order/in_progress?user_type=${user_type}&user_id=${user_id}`);
    return response.data;
};

const ServiceProviderDashboard = () => {
    const [reload, setReload] = useState(false); // State to trigger re-render
    const [loading , setLoading] = useState(false)

    const { currentUser } = useSelector((state) => state.user);
    const user_id = currentUser._id;
    const user_type = currentUser.user_type;

    const { data: pendingOrders, error: pendingOrdersError, isLoading: pendingOrdersLoading, refetch: refetchPendingOrders } = useQuery({
        queryKey: ['pending_orders', user_id],
        queryFn: () => getPending(user_id, user_type),
        staleTime: 0,
        cacheTime: 0,
    });
    
    const { data: in_progressOrders, error: in_progressOrdersError, isLoading: in_progressOrdersLoading, refetch: refetchInProgressOrders } = useQuery({
        queryKey: ['in_progress_orders', user_id],
        queryFn: () => getInProgress(user_id, user_type),
        staleTime: 0,
        cacheTime: 0,
    });
    
    const UpdateReload = async () => {
        setLoading(true);
        console.log('Triggering refetch and re-render...');

        const { data: updatedPendingOrders } = await refetchPendingOrders();
        const { data: updatedInProgressOrders } = await refetchInProgressOrders();
        
        console.log('Updated pendingOrders:', updatedPendingOrders);
        console.log('Updated inProgressOrders:', updatedInProgressOrders);
        

        setReload(prev => !prev);
        setLoading(false);
    };
    


    if (pendingOrdersLoading || in_progressOrdersLoading || loading) {
        return <Loader />;
    }
    
    

    // Show error if there is one
    if (pendingOrdersError || in_progressOrdersError) {
        return <div>Error: {pendingOrdersError?.message || in_progressOrdersError?.message}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            {/* Main dashboard layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
                {/* Left sidebar (Profile & Earnings) */}
                <div className="md:col-span-1 space-y-4">
                    {/* Profile Section */}
                    <UserProfile key={`profile-${reload}`} />

                    {/* Earnings Section */}
                    <Earnings key={`earnings-${reload}`} />
                </div>

                {/* Main Content Area (Current Services, Active Orders, Pending Requests, Completed Orders) */}
                <div className="md:col-span-3 space-y-4">
                    {/* Current Services Section */}
                    <Services key={`services-${reload}`} />

                    <ActiveOrders 
                        in_progressOrders = {in_progressOrders}
                        key={`active-orders-${reload}`} 
                    />

                    <PendingOrders
                        pendingOrdersArr={pendingOrders}
                        onUpdate={UpdateReload}
                        key={`pending-orders-${reload}`} // Unique key for PendingOrders
                    />
                    
                    <CompletedOrders key={`completed-orders-${reload}`} />
                </div>
            </div>
        </div>
    );
};

export default ServiceProviderDashboard;
