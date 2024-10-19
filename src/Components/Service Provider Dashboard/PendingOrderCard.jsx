import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../loader';


const PendingOrderCard = ({ order, onRespond, onUpdate }) => {
    const { currentUser } = useSelector((state) => state.user);
    const user_id = currentUser._id;
    const user_type = currentUser.user_type

    const [showSchedulePopup, setShowSchedulePopup] = useState(false);
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [showCounterPricePopup, setShowCounterPricePopup] = useState(false);
    const [counterPrice, setCounterPrice] = useState('');
    const [loading, setLoading] = useState(false);


    // Handle response (Accept/Reject/Schedule)
    const handleResponse = (response) => {
        if (response == 'Accept') {
            const data = { user_type: user_type, order_id: order._id };
            setLoading(true)
            axios.patch(`https://backend-qyb4mybn.b4a.run/order/accept`, data)
                .then(response => {
                    onUpdate()
                    console.log(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })

        }
        if (response == 'Reject') {
            const data = { user_type: user_type, order_id: order._id };
            setLoading(true)
            axios.patch(`https://backend-qyb4mybn.b4a.run/order/reject`, data)
                .then(response => {
                    onUpdate()
                    console.log(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })

        }
        if (response === 'Schedule') {
            setShowSchedulePopup(true);
        } else if (response === 'CounterPrice') {
            setShowCounterPricePopup(true);

        } else {
            onRespond(order.id, response);
        }
    };

    // Handle schedule submit
    const handleScheduleSubmit = () => {
        if (scheduleDate && scheduleTime) {
            const data = { order_id: order._id, service_provider_date: scheduleDate, service_provider_time: scheduleTime };
            setLoading(true)
            axios.patch(`https://backend-qyb4mybn.b4a.run/order/time_update`, data)
                .then(response => {
                    onUpdate()
                    console.log(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
            setShowSchedulePopup(false);
        } else {
            alert('Please select both date and time.');
        }
    };

    const handleCounterPriceSubmit = () => {
        if (counterPrice) {

            console.log(counterPrice)
            const data = {
                order_id: order._id,
                service_provider_price: counterPrice
            }
            setLoading(true)
            axios.patch(`https://backend-qyb4mybn.b4a.run/order/counter_price_update`, data)
                .then(response => {
                    onUpdate()
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                })
            setShowCounterPricePopup(false);
        } else {
            alert('Please enter a counter price.');
        }
    };

    if (loading) {
        return <Loader />
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 w-full max-w-sm sm:max-w-none hover:shadow-lg transition-shadow">
            <p className="text-gray-600">{user_type == 'buyer' ? 'Service Provider' : 'Customer'}: {user_type == 'buyer' ? order.service_provider_id.name : order.buyer_id.name}</p>
            <p className="text-gray-600">Description: {order.description}</p>
            <p className="text-gray-600">
                Order Date: {new Date(order.order_date).toLocaleDateString('en-GB')}
            </p>
            <p className="text-gray-600">
                Appointment Date: {new Date(order.appointment_date).toLocaleDateString('en-GB')}
            </p>

            <p className="text-gray-600">Appointment Time: {order.appointment_time}</p>

            {order.service_provider_time && (
                <>
                    <p className="text-gray-600">
                        {user_type === 'buyer' ? 'Provider Date: ' : 'Your Date: '}: {new Date(order.service_provider_date).toLocaleDateString('en-GB')}
                    </p>
                    <p className="text-gray-600">{user_type === 'buyer' ? 'Provider Time: ' : 'Your Time: '} {order.service_provider_time}</p>
                </>
            )}

            <p className="text-gray-600">Status:

                {order.order_status == "pending" && <span className="text-yellow-500 font-semibold"> Pending</span>}

            </p>
            <span className="text-xl font-bold text-green-500 mb-4">{user_type == 'buyer' ? 'Your' : "Client's"} Price: {order.price}</span>
            <br />
            {order.service_provider_price !== 0 && (
                <span className="text-xl font-bold text-green-500 mb-4">
                    {user_type === 'buyer' ? 'Counter' : 'Your'} Price: {order.service_provider_price}
                </span>
            )}



            {/* Responsive button container */}
            {(order.isUpdated == false && user_type === 'service provider') &&
                <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 justify-center">
                    <button
                        onClick={() => handleResponse('Accept')}
                        className="w-full sm:w-auto px-4 py-2 bg-custom-violet text-white rounded-lg"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleResponse('Reject')}
                        className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                        Reject
                    </button>
                    <button
                        onClick={() => handleResponse('Schedule')}
                        className="w-full sm:w-auto px-4 py-2 bg-custom-blue text-white rounded-lg"
                    >
                        Schedule
                    </button>

                    <button
                        onClick={() => handleResponse('CounterPrice')}
                        className="w-full sm:w-auto px-4 py-2 bg-custom-cyan text-white rounded-lg"
                    >
                        Counter Price
                    </button>
                </div>}

            {(order.isUpdated == false && user_type === 'buyer') &&
                <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 justify-center">
                    <p>Wating for service provider response</p>
                </div>}


            {(order.isUpdated == true && user_type === 'service provider') &&
                <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 justify-center">
                    <p>Waiting for user Response</p>
                </div>}

            {(order.isUpdated && user_type === 'buyer') &&
                <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 justify-center">
                    <button
                        onClick={() => handleResponse('Accept')}
                        className="w-full sm:w-auto px-4 py-2 bg-custom-violet text-white rounded-lg"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleResponse('Reject')}
                        className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                        Reject
                    </button>
                </div>}

            {/* Scheduling Popup */}
            {showSchedulePopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Schedule Order</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Select Date
                            </label>
                            <input
                                type="date"
                                value={scheduleDate}
                                onChange={(e) => setScheduleDate(e.target.value)}
                                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Select Time
                            </label>
                            <input
                                type="time"
                                value={scheduleTime}
                                onChange={(e) => setScheduleTime(e.target.value)}
                                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowSchedulePopup(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleScheduleSubmit}
                                className="px-4 py-2 bg-custom-blue text-white rounded-lg"
                            >
                                Schedule
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Counter Price Popup */}
            {showCounterPricePopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Counter Price</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                                Enter Counter Price
                            </label>
                            <input
                                type="number"
                                value={counterPrice}
                                onChange={(e) => setCounterPrice(e.target.value)}
                                placeholder="Enter your counter price"
                                className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowCounterPricePopup(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCounterPriceSubmit}
                                className="px-4 py-2 bg-custom-cyan text-white rounded-lg"
                            >
                                Submit Counter Price
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PendingOrderCard;
