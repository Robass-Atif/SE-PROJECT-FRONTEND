import React, { useState } from "react";
import PortfolioForm from "./PortfolioForm";

import PortfolioList from "./PortfolioList";

const PortfolioManager = () => {
  const [portfolios, setPortfolios] = useState([]); // Store portfolio items
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Function to add new portfolio item
  const addPortfolioItem = (newItem) => {
    setPortfolios([...portfolios, newItem]);
  };

  return (
    <div className="p-6">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl text-gray-800">Portfolio</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Add Portfolio
        </button>
      </div>

      {/* Modal for adding portfolio */}
      {isModalOpen && (
        <PortfolioForm
          closeModal={() => setIsModalOpen(false)}
          addPortfolioItem={addPortfolioItem}
        />
      )}

      {/* Portfolio List */}
      <PortfolioList portfolios={portfolios} />
    </div>
  );
};

export default PortfolioManager;
