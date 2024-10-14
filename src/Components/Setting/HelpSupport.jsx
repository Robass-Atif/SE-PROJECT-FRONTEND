import React from "react";

const HelpSupport = () => {
  return (
    <div className="flex justify-center items-center p-4 min-h-screen">
      <div className="bg-white border shadow-lg p-6 rounded-lg w-full max-w-lg">
        <h2 className="mb-6 font-bold text-3xl text-gray-900">
          Help & Support
        </h2>
        <div className="space-y-6">
          {/* Contact Support */}
          <div className="flex justify-between items-center bg-gray-50 shadow-sm hover:shadow-md p-4 rounded-lg transition-shadow duration-300 ease-in-out">
            <span className="font-medium text-gray-800 text-lg">
              Contact Support
            </span>
            <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 text-white focus:outline-none transition duration-300 ease-in-out">
              Contact
            </button>
          </div>

          {/* FAQs */}
          <div className="flex justify-between items-center bg-gray-50 shadow-sm hover:shadow-md p-4 rounded-lg transition-shadow duration-300 ease-in-out">
            <span className="font-medium text-gray-800 text-lg">FAQs</span>
            <a
              href="#"
              className="font-medium text-blue-600 text-lg hover:underline transition duration-300 ease-in-out"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
