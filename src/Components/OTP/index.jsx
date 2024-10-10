import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, email } = location.state.data; // Destructure the passed data from state
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to the next input field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join(""); // Join the OTP array to get the full OTP
    try {
        const response = await fetch('https://backend-qyb4mybn.b4a.run/api/OTP-verification', {
            method: 'POST', // Specify the request method
            headers: {
              'Content-Type': 'application/json', // Indicate the type of content
            },
            body: JSON.stringify({ userId: _id, otp: otpValue }), // Convert the data to JSON format
          });
          

      if (response.ok) {
        // Handle successful OTP verification (e.g., navigate to the next page)
        console.log('OTP verified:', response);
        navigate('/role-selection',{state: {email}});

       
      } else {
        alert('OTP verification failed: ' + response);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('An error occurred while verifying OTP.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          OTP Verification
        </h2>
        <p className="text-center text-gray-500">Enter the 6-digit OTP sent to your phone</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => (
              <input
                className="w-12 h-12 border rounded-lg text-center text-lg outline-none bg-gray-50 focus:ring-2 focus:ring-indigo-600"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <div className="flex flex-col items-center space-y-2">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
            >
              Verify OTP
            </button>
            <button
              type="button"
              className="text-indigo-600 hover:underline"
              onClick={() => setOtp(new Array(6).fill(""))}
            >
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
