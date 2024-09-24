import React from "react";

const Subscription = () => {
  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Subscription</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Current Plan</span>
          <div>[Plan Details]</div>
        </div>
        <div className="flex justify-between items-center">
          <span>Upgrade/Downgrade</span>
          <div>[Options]</div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
