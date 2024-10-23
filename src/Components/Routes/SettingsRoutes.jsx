import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileSettings from "../Setting/ProfileSettings";
import AccountSettings from "../Setting/AccountSettings";
import Notifications from "../Setting/Notifications";
import PrivacySettings from "../Setting/PrivacySettings";
import Jazzcash from "../JazzcashPayment/Jazzcash";
import Security from "../Setting/Security";
import Subscription from "../Setting/Subscription";
import HelpSupport from "../Setting/HelpSupport";
import Sidebar from "../Setting/Sidebar";

const SettingsRoutes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F7F9FC] lg:ml-64 p-6 min-h-screen text-[#333] transition-colors duration-300">
        <div className="border-[#E1E4E8] bg-white shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
          <Routes>
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="account" element={<AccountSettings />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="privacy" element={<PrivacySettings />} />
            <Route path="payments" element={<Jazzcash />} />
            <Route path="security" element={<Security />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="help" element={<HelpSupport />} />
            <Route path="/" element={<AccountSettings />} />{" "}
            {/* Default Route */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SettingsRoutes;
