import React from 'react';
import Services from './CurrentServices';
import PendingOrders from './PendingOrders';
import Earnings from './Earning';
import UserProfile from './UserProfile';
import CompletedOrders from './CompletedOrders';
import ActiveOrders from './ActiveOrders';

const ServiceProviderDashboard = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Main dashboard layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
                
                {/* Left sidebar (Profile & Earnings) */}
                <div className="md:col-span-1 space-y-4">
                    {/* Profile Section */}
                    <UserProfile />

                    {/* Earnings Section */}
                    <Earnings />
                </div>

                {/* Main Content Area (Current Services, Active Orders, Pending Requests, Completed Orders) */}
                <div className="md:col-span-3 space-y-4">
                    {/* Current Services Section */}
                    <Services />

                    <ActiveOrders />

                    <PendingOrders />
                    <CompletedOrders />
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceProviderDashboard;
