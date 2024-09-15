import React, { useState } from "react";

const TrustSafety = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8 mt-20 pt-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          {" > "}
          <a href="#" className="hover:underline">
            Trust & Safety
          </a>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Upwork Trust & Safety
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          To succeed on Upwork, you need to trust that the people you're dealing
          with are honest, and that you're safe from things like fraud and
          scams.
        </p>
        <p className="text-gray-600 mb-6">
          The T&S team is here to uphold that trust—and keep you safe. We do
          that by establishing rules about what's allowed, and then identifying
          and dealing with anything (or anyone) that could damage trust in
          Upwork, whether the target is you, other users, or the Upwork platform
          itself.
        </p>

        {/* Dropdown Section */}
        <div className="mt-4">
          <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center bg-[#5433FF] text-white px-8 py-5 rounded-lg focus:outline-none"
          >
            <span className="font-bold text-xl">
              Read about our Marketplace Standards
            </span>
            <span className="text-2xl">{isOpen ? "-" : "+"}</span>
          </button>

          {isOpen && (
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
          <p className="text-gray-600">
            Our marketplace standards are designed to protect the Upwork
            community from any unfair or harmful activity, and to ensure a
            safe and professional environment.
          </p>
        </div>
          )}
        </div>

        {/* build like that some more */}

        <div className="mt-4">
          <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center bg-[#5433FF] text-white px-8 py-5 rounded-lg focus:outline-none"
          >
            <span className="font-bold text-xl">
              Read about our Marketplace Standards
            </span>
            <span className="text-2xl">{isOpen ? "-" : "+"}</span>
          </button>

          {isOpen && (
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
          <p className="text-gray-600">
            Our marketplace standards are designed to protect the Upwork
            community from any unfair or harmful activity, and to ensure a
            safe and professional environment.
          </p>
        </div>
          )}
        </div>

        <div className="mt-4">
          <button
            onClick={toggleDropdown}
            className="w-full flex justify-between items-center bg-[#5433FF] text-white px-8 py-5 rounded-lg focus:outline-none"
          >
            <span className="font-bold text-xl">
              Read about our Marketplace Standards
            </span>
            <span className="text-2xl">{isOpen ? "-" : "+"}</span>
          </button>

          {isOpen && (
           <div className="bg-gray-100 p-4 mt-4 rounded-lg">
           <p className="text-gray-600">
             Our marketplace standards are designed to protect the Upwork
             community from any unfair or harmful activity, and to ensure a
             safe and professional environment.
           </p>
         </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;
