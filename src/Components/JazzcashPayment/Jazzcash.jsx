import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Payment = () => {
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [description, setDescription] = useState("Freelance Service Payment");

  const queryClient = useQueryClient();

  const initiatePayment = async (paymentData) => {
    const response = await axios.post(
      "https://backend-qyb4mybn.b4a.run/jazzcash/initiate-payment",
      paymentData
    );
    return response.data;
  };

  const mutation = useMutation(initiatePayment, {
    onSuccess: (data) => {
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      }
    },
    onError: (error) => {
      console.error("Error initiating payment:", error);
    },
  });

  const handlePayment = (e) => {
    e.preventDefault();
    mutation.mutate({
      orderId,
      amount,
      description,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handlePayment}
        className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md"
      >
        <h2 className="mb-6 font-bold text-2xl text-center text-gray-800">
          Payment Form
        </h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
          className="block border-gray-300 mb-4 p-3 border rounded focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
        />
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Order ID"
          required
          className="block border-gray-300 mb-4 p-3 border rounded focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
        />
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ${
            mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {mutation.isLoading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default Payment;
