import React from "react";

const Security = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Security</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Account Activity</span>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
            View Activity
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>Login Sessions</span>
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
