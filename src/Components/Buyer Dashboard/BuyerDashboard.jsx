import React, { useState } from "react";
import UserProfile from "../Service Provider Dashboard/UserProfile";
import Earnings from "../Service Provider Dashboard/Earning";
import Services from "../Service Provider Dashboard/CurrentServices";
import ActiveOrders from "../Service Provider Dashboard/ActiveOrders";
import PendingOrders from "../Service Provider Dashboard/PendingOrders";
import CompletedOrders from "../Service Provider Dashboard/CompletedOrders";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Loader from "../loader";

// Function to fetch pending orders
const getPending = async (user_id, user_type) => {
  const response = await axios.get(
    `https://backend-qyb4mybn.b4a.run/order/pending?user_type=${user_type}&user_id=${user_id}`
  );
  return response.data;
};

const getInProgress = async (user_id, user_type) => {
  const response = await axios.get(
    `https://backend-qyb4mybn.b4a.run/order/in_progress?user_type=${user_type}&user_id=${user_id}`
  );
  return response.data;
};

const BuyerDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

<<<<<<< HEAD
  const user_id = currentUser._id;
  const user_type = currentUser.user_type;
=======
    const user_id = currentUser._id;
    const user_type = currentUser.user_type;
>>>>>>> 66f437c47ec6fbb274d04099455196aec6864905

  const {
    data: pendingOrders,
    error: pendingOrdersError,
    isLoading: pendingOrdersLoading,
    refetch: refetchPendingOrders,
  } = useQuery({
    queryKey: ["pending_orders", user_id],
    queryFn: () => getPending(user_id, user_type),
    staleTime: 0,
    cacheTime: 0,
  });

  const {
    data: in_progressOrders,
    error: in_progressOrdersError,
    isLoading: in_progressOrdersLoading,
    refetch: refetchInProgressOrders,
  } = useQuery({
    queryKey: ["in_progress_orders", user_id],
    queryFn: () => getInProgress(user_id, user_type),
    staleTime: 0,
    cacheTime: 0,
  });

  const UpdateReload = async () => {
    setLoading(true);
    console.log("Triggering refetch and re-render...");

    const { data: updatedPendingOrders } = await refetchPendingOrders();
    const { data: updatedInProgressOrders } = await refetchInProgressOrders();

    console.log("Updated pendingOrders:", updatedPendingOrders);
    console.log("Updated inProgressOrders:", updatedInProgressOrders);

    setReload((prev) => !prev);
    setLoading(false);
  };

  // Show loader while fetching
  if (pendingOrdersLoading || in_progressOrdersLoading || loading) {
    return <Loader />;
  }

  // Show error if there is one
  if (pendingOrdersError || in_progressOrdersError) {
    return (
      <div>
        Error: {pendingOrdersError?.message || in_progressOrdersError?.message}
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-6 container">
      {/* Main dashboard layout */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4 h-full">
        {/* Left sidebar (Profile & Earnings) */}
        <div className="space-y-4 md:col-span-1">
          {/* Profile Section */}
          <UserProfile key={`profile-${reload}`} />
        </div>

        {/* Main Content Area (Active Orders, Pending Requests, Completed Orders) */}
        <div className="space-y-4 md:col-span-3">
          <ActiveOrders
            in_progressOrders={in_progressOrders}
            key={`active-orders-${reload}`}
          />
          <PendingOrders
            pendingOrdersArr={pendingOrders}
            onUpdate={UpdateReload}
            key={`pending-orders-${reload}`} // Unique key to force re-render
          />
          <CompletedOrders key={`completed-orders-${reload}`} />
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
