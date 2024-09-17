import React, { useState } from "react";

const ProfilePage = () => {
  return (
    <div className="bg-[#F7F9FC] p-6 min-h-screen text-[#333] transition-colors duration-300">
      {/* Main Profile Container */}
      <div className="border-[#E1E4E8] bg-white shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
        {/* Profile Header */}
        <div className="flex items-center">
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="border-[#E1E4E8] shadow-lg border rounded-full w-32 h-32"
          />
          {/* Profile Details */}
          <div className="flex-1 ml-6">
            <h1 className="font-bold text-[#32325D] text-4xl transition-colors duration-300">
              John Carpenter
            </h1>
            <p className="mt-2 text-[#6B6B76] text-xl">
              Expert Carpenter & Woodworker
            </p>
            <p className="mt-2 text-[#4B4F56]">
              Crafting custom furniture and renovating homes with precision and
              care.
            </p>
            <button className="bg-[#5469D4] hover:bg-[#4353A3] mt-4 px-4 py-2 rounded-lg text-white transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">About Me</h2>
          <p className="mt-2 text-[#6B6B76]">
            I am a dedicated carpenter with a passion for creating beautiful and
            functional woodwork. My services include custom furniture, home
            renovations, and more.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Skills</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              "Custom Furniture",
              "Cabinetry",
              "Home Renovations",
              "Deck Building",
              "Wood Finishing",
            ].map((skill) => (
              <span
                key={skill}
                className="border-[#E1E4E8] bg-[#F0F4F8] px-4 py-1 border rounded-full font-semibold text-[#32325D] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Languages</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { language: "English", proficiency: "Fluent" },
              { language: "Spanish", proficiency: "Conversational" },
            ].map((lang) => (
              <div
                key={lang.language}
                className="border-[#E1E4E8] bg-[#F0F4F8] p-4 border rounded-lg w-64"
              >
                <h3 className="font-semibold text-[#32325D] text-xl">
                  {lang.language}
                </h3>
                <p className="text-[#4B4F56]">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Location</h2>
          <p className="mt-2 text-[#6B6B76]">Based in Los Angeles, CA</p>
          <p className="text-[#6B6B76]">
            Available for projects across the greater LA area.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Services</h2>
          <div className="mt-4">
            {[
              {
                service: "Custom Furniture Design",
                description:
                  "Design and build custom furniture tailored to your needs.",
                price: "$800 - $2500",
              },
              {
                service: "Cabinet Installation",
                description:
                  "Expert installation of kitchen and bathroom cabinets.",
                price: "$600 - $1500",
              },
              {
                service: "Home Renovations",
                description:
                  "Comprehensive renovation services for any room in your home.",
                price: "$1200 - $5000",
              },
            ].map((svc) => (
              <div key={svc.service} className="border-[#E1E4E8] py-4 border-b">
                <h3 className="font-semibold text-[#32325D] text-xl">
                  {svc.service}
                </h3>
                <p className="mt-1 text-[#4B4F56]">{svc.description}</p>
                <p className="mt-2 font-semibold text-[#32325D]">{svc.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Portfolio</h2>
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {[
              {
                src: "https://via.placeholder.com/300",
                alt: "Project 1",
                caption: "Custom Oak Dining Table",
              },
              {
                src: "https://via.placeholder.com/300",
                alt: "Project 2",
                caption: "Modern Kitchen Cabinets",
              },
              {
                src: "https://via.placeholder.com/300",
                alt: "Project 3",
                caption: "Elegant Wooden Bookshelves",
              },
            ].map((project) => (
              <div
                key={project.alt}
                className="border-[#E1E4E8] bg-[#F0F4F8] shadow-lg border rounded-lg transform transition-transform overflow-hidden hover:scale-105 duration-300"
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <p className="p-4 text-[#32325D]">{project.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Information */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">
            Booking Information
          </h2>
          <p className="mt-2 text-[#6B6B76]">
            Use the calendar below to schedule a consultation or appointment.
          </p>
          <div className="border-[#E1E4E8] bg-[#F0F4F8] mt-4 p-4 border rounded-lg">
            <p className="text-[#4B4F56]">Calendar component placeholder.</p>
          </div>
        </div>

        {/* Pricing Information */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">Pricing</h2>
          <p className="mt-2 text-[#6B6B76]">
            Get a custom quote based on your project requirements.
          </p>
          <button className="bg-[#5469D4] hover:bg-[#4353A3] mt-4 px-4 py-2 rounded-lg text-white transition duration-300">
            Request a Quote
          </button>
        </div>

        {/* FAQs Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">FAQs</h2>
          <div className="border-[#E1E4E8] mt-4 pt-4 border-t">
            {[
              {
                question: "What is your typical project turnaround time?",
                answer:
                  "Typical projects take between 2 to 6 weeks depending on complexity and scope.",
              },
              {
                question: "Do you offer post-project support?",
                answer:
                  "Yes, I provide a 30-day period for any adjustments or touch-ups needed.",
              },
            ].map((faq) => (
              <div key={faq.question} className="mb-4">
                <h3 className="font-semibold text-[#32325D] text-xl">
                  {faq.question}
                </h3>
                <p className="mt-1 text-[#4B4F56]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy and Security */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">
            Privacy and Security
          </h2>
          <p className="mt-2 text-[#6B6B76]">
            Your privacy and data security are top priorities. I adhere to
            strict standards to ensure all information is handled safely and
            confidentially.
          </p>
        </div>

        {/* Request Callback */}
        <div className="mt-6">
          <button className="bg-[#5469D4] hover:bg-[#4353A3] px-4 py-2 rounded-lg text-white transition duration-300">
            Request a Callback
          </button>
        </div>

        {/* Map and Location */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#32325D] text-3xl">
            Map and Location
          </h2>
          <div className="border-[#E1E4E8] bg-[#F0F4F8] mt-4 p-4 border rounded-lg">
            <p className="text-[#4B4F56]">Here is my location:</p>
            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.377817095759!2d-122.41687908468167!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cc732eb7f%3A0x2621ccf16ec0e1e3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647959240822!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              className="shadow-lg rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
