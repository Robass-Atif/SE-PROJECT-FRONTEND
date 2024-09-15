import React, { useState } from "react";

const ProfilePage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Main Content Block */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          {/* Freelancer Image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Freelancer"
            className="w-32 h-32 rounded-full shadow-md"
          />
          {/* Freelancer Details */}
          <div className="flex-1 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h1>
            <p className="text-green-600 text-lg font-semibold mb-2">
              Web Developer | Full Stack | React & Node.js
            </p>
            <p className="text-gray-600 mb-4">
              Experienced developer with 5+ years of experience building dynamic
              websites.
            </p>
            <button className="w-full px-6 py-3 bg-[#5433FF] text-white rounded-lg font-semibold shadow-lg hover:bg-[#4379FF] transition duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4">
            I am a passionate web developer with expertise in building modern
            web applications. I specialize in React.js, Node.js, and have
            experience with various technologies like MongoDB, Express, and
            more. My goal is to provide high-quality services to my clients and
            ensure the projects meet their expectations.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          <div className="flex flex-wrap mt-4">
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              React.js
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              Node.js
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              MongoDB
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              Express.js
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              JavaScript
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              HTML5
            </span>
            <span className="bg-[#5433FF] text-white px-4 py-2 rounded-full font-semibold mr-2 mt-2">
              CSS3
            </span>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Location</h2>
          <p className="text-gray-600 mt-4">Based in San Francisco, CA</p>
          <p className="text-gray-600 mt-2">
            Available for remote and on-site projects.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Services</h2>
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Website Development
              </h3>
              <p className="text-gray-600 mt-2">
                I will build a full-stack web application tailored to your
                needs.
              </p>
              <p className="text-green-600 mt-4 font-semibold">$500 - $1500</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Frontend Development
              </h3>
              <p className="text-gray-600 mt-2">
                I will create stunning and responsive front-end designs using
                React.js.
              </p>
              <p className="text-green-600 mt-4 font-semibold">$300 - $800</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                API Integration
              </h3>
              <p className="text-gray-600 mt-2">
                I will integrate third-party APIs with your website seamlessly.
              </p>
              <p className="text-green-600 mt-4 font-semibold">$200 - $600</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600 mt-2">
                University of Engineering & Technology, Lahore
              </p>
              <p className="text-gray-600 mt-1">Graduated: 2018</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Master of Science in Software Engineering
              </h3>
              <p className="text-gray-600 mt-2">
                Institute of Software Research, San Francisco
              </p>
              <p className="text-gray-600 mt-1">Expected Graduation: 2024</p>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-6">
  <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
  <div className="flex flex-wrap mt-4 gap-4"> {/* Added gap for consistent spacing */}
    <div className="bg-[#5433FF] text-white px-4 py-2 rounded-xl font-semibold max-w-xs"> {/* Removed mx-20 */}
      <h3 className="text-xl">English</h3>
      <p className="text-gray-200">Fluent</p>
    </div>
    <div className="bg-[#5433FF] text-white px-4 py-2 rounded-xl font-semibold max-w-xs"> {/* Removed mx-20 */}
      <h3 className="text-xl">Spanish</h3>
      <p className="text-gray-200">Conversational</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default ProfilePage;
