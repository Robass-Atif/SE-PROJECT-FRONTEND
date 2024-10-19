import React, { useState } from "react";

const Notifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg p-6 border rounded-lg w-full max-w-lg">
        <h2 className="mb-6 font-bold text-3xl text-gray-900">Notifications</h2>

        {/* Email Notifications */}
        {/* <div className="flex justify-between items-center bg-gray-50 shadow-md hover:shadow-lg p-4 rounded-lg transition-shadow duration-300 ease-in-out">
          <span className="font-medium text-gray-800 text-lg">
            Email Notifications
          </span>
          {/* <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="sr-only"
            />
            <div className="bg-gray-200 rounded-full w-10 h-6"></div>
            <div
              className={`absolute w-4 h-4 bg-blue-600 rounded-full transition-transform transform ${
                emailNotifications ? "translate-x-4" : "translate-x-0"
              }`}
            ></div>
          </label> */}
        {/* </div> */} 

        {/* In-App Notifications */}
        <div className="flex justify-between items-center bg-gray-50 shadow-md hover:shadow-lg p-4 rounded-lg transition-shadow duration-300 ease-in-out">
          <span className="font-medium text-gray-800 text-lg">
            In-App Notifications
          </span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              checked={inAppNotifications}
              onChange={() => setInAppNotifications(!inAppNotifications)}
              className="sr-only"
            />
            <div className="bg-gray-200 rounded-full w-10 h-6"></div>
            <div
              className={`absolute w-4 h-4 bg-blue-600 rounded-full transition-transform transform ${
                inAppNotifications ? "translate-x-4" : "translate-x-0"
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
