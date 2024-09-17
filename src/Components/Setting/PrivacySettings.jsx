import React, { useState } from "react";

const PrivacySettings = () => {
  const [profileVisibility, setProfileVisibility] = useState("Public");
  const [searchVisibility, setSearchVisibility] = useState(true);

  return (
    <div>
      <h2 className="mb-4 font-bold text-2xl">Privacy Settings</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Profile Visibility</span>
          <select
            value={profileVisibility}
            onChange={(e) => setProfileVisibility(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <span>Search Visibility</span>
          <input
            type="checkbox"
            checked={searchVisibility}
            onChange={() => setSearchVisibility(!searchVisibility)}
            className="toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
