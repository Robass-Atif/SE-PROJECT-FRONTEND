import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckout = async (event) => {
    event.preventDefault();
    setError(null);
    const productId = "123"; // Replace with the actual product ID you want to checkout
    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/jazzcash/checkout/${productId}`
      );

      console.log("Response Data:", response.data);

      // Set the postData for rendering the payment form
      setPostData(response.data);
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("Failed to initiate payment. Please try again.");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const form = document.getElementById("jazzcashForm");
    if (form) {
      form.submit(); // Submit form to the JazzCash payment portal
    }
  };

  return (
    <div className="flex flex-col justify-center items-center border-gray-300 shadow-lg p-6 border rounded-lg">
      <h1 className="mb-4 font-bold text-2xl">JazzCash Payment</h1>
      {error && <div className="mb-2 text-red-500">{error}</div>}
      {postData ? (
        <>
          <h2 className="font-semibold text-xl">ORDER</h2>
          <h3 className="font-medium text-lg">
            {postData.pp_Amount / 100} PKR
          </h3>
          <form
            id="jazzcashForm"
            method="post"
            action="https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/"
          >
            {Object.entries(postData).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <button
              type="button"
              onClick={submitForm}
              className="bg-red-600 hover:bg-red-500 mt-4 px-4 py-2 rounded text-white"
            >
              Pay with JazzCash
            </button>
          </form>
        </>
      ) : (
        <button
          onClick={handleCheckout}
          className="bg-red-600 hover:bg-red-500 mt-4 px-4 py-2 rounded text-white"
        >
          Initiate Payment
        </button>
      )}
    </div>
  );
};

export default PaymentForm;
