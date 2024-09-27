import React, { useState } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to the next input field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP is ${otp.join("")}`);
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