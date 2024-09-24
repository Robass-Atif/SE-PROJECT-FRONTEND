import React from "react";

const PortfolioList = ({ portfolios }) => {
  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {portfolios.map((portfolio) => (
        <div
          key={portfolio.id}
          className="bg-white shadow-md p-4 rounded-lg overflow-hidden"
        >
          <img
            src={portfolio.image}
            alt={portfolio.title}
            className="mb-4 w-full h-48 object-cover"
          />
          <h3 className="font-bold text-lg">{portfolio.title}</h3>
          <p className="mt-2 text-gray-600">
            <strong>Role:</strong> {portfolio.role}
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Description:</strong> {portfolio.description}
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Skills:</strong> {portfolio.skills}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
