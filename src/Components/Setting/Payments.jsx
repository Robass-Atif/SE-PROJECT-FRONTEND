import React, { useState } from "react";

const Payments = () => {
  const [billingAddress, setBillingAddress] = useState("");

  const handleAddPaymentMethod = () => {
    // Handle adding payment method
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 min-h-screen">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h2 className="mb-6 font-bold text-3xl text-gray-900">Payments</h2>

        <button
          onClick={handleAddPaymentMethod}
          className="bg-blue-600 hover:bg-blue-500 mb-6 px-5 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 w-full text-white focus:outline-none transition duration-300 ease-in-out"
        >
          Add Payment Method
        </button>

        <div className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 text-lg">
              Billing Address
            </label>
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="border-gray-300 shadow-sm mt-2 p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 w-full transition duration-300 ease-in-out"
              placeholder="Enter your billing address"
            />
          </div>

          <div className="mt-6">
            <h3 className="mb-3 font-semibold text-gray-800 text-xl">
              Transaction History
            </h3>
            {/* Display transaction history */}
            <div className="bg-gray-50 shadow-sm p-4 rounded-lg">
              <p className="text-gray-600">
                Your transaction history will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
