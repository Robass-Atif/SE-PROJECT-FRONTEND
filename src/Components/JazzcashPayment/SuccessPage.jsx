// SuccessPage.js
import React from "react";

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your payment. Your transaction has been completed
        successfully.
      </p>
      <a href="/">Go back to the homepage</a>

      <style jsx>{`
        .success-page {
          text-align: center;
          margin: 20px;
          padding: 20px;
          border: 1px solid #4caf50;
          border-radius: 10px;
          background-color: #e8f5e9;
          color: #388e3c;
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;
