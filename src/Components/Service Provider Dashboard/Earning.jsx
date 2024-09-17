import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Earnings = () => {
    const [earnings, setEarnings] = useState(500);

    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md">
            <Link
                to="/analytics" // Path to the Analytics page
                className="absolute top-4 right-4 text-custom-violet hover:underline"
            >
                Analytics
            </Link>
            <h2 className="text-xl font-semibold mb-4">Total Earnings</h2>
            <p className="text-2xl font-bold text-green-500">${earnings}</p>
        </div>
    )
}

export default Earnings;
