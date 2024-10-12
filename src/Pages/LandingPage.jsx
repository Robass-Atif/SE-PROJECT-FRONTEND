import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaWrench,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
  FaUser,
  FaHammer,
  FaBrush,
  FaLock,
  FaTree,
} from "react-icons/fa";
import illustration from "../assets/illustration.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleNavigation = () => {
    if (currentUser?.user_type === "buyer") {
      navigate("/services");
    } else if (currentUser?.user_type === "service provider") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 text-black">
        <div className="relative z-10 flex items-center mx-auto px-4 max-w-7xl">
          {/* Text and Call-to-Action */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="mb-4 font-extrabold text-4xl md:text-5xl leading-tight">
              Find Expert Freelancers <br className="md:block hidden" /> for
              Your Job
            </h1>
            <p className="mb-8 text-lg">
              Professional services for all your needs, from home repairs to
              digital marketing.
            </p>
            <div className="mt-6">
              {!currentUser ? (
                <Link to="/signup">
                  <button className="border-custom-violet bg-white hover:bg-gray-100 hover:shadow-xl px-8 py-3 border rounded-md font-semibold text-custom-violet transform transition-transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleNavigation}
                  className="border-custom-violet bg-custom-violet hover:bg-violet-600 hover:shadow-xl px-8 py-3 border rounded-md font-semibold text-white transform transition-transform hover:scale-105"
                >
                  {currentUser.user_type === "buyer"
                    ? "Go to Services"
                    : "Go to Dashboard"}
                </button>
              )}
            </div>
          </div>
          {/* Illustration */}
          <div className="md:block flex justify-end hidden w-1/2">
            <img
              src={illustration}
              alt="Freelancer Illustration"
              className="ml-6 w-3/4 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-4xl text-gray-800">
            Popular Services
          </h2>
          <p className="mb-10 text-gray-600 text-lg">
            Explore the most sought-after services from our experts.
          </p>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition-all">
              <FaWrench className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-bold text-2xl">Plumbing</h3>
              <p className="text-gray-700">
                Certified plumbers for all your needs.
              </p>
            </div>
            <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition-all">
              <FaLightbulb className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-bold text-2xl">Electricians</h3>
              <p className="text-gray-700">
                Professional electricians for home and office repairs.
              </p>
            </div>
            <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition-all">
              <FaHammer className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-bold text-2xl">Carpenter</h3>
              <p className="text-gray-700">
                Skilled carpenters for custom furniture and repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-4xl text-gray-800">
            Explore Categories
          </h2>
          <p className="mb-10 text-gray-600 text-lg">
            Discover various services to meet your unique requirements.
          </p>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg transition-all">
              <FaBrush className="mx-auto mb-4 text-5xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">Painting</h3>
              <p className="text-gray-700">
                Professional painting services to enhance your space.
              </p>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg transition-all">
              <FaTree className="mx-auto mb-4 text-5xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">Landscaping</h3>
              <p className="text-gray-700">
                Expert landscaping for a beautiful and well-maintained garden.
              </p>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg transition-all">
              <FaLock className="mx-auto mb-4 text-5xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">Locksmith</h3>
              <p className="text-gray-700">
                Reliable locksmith services for secure and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-4xl text-gray-800">
            Why Choose Us?
          </h2>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg transition-all">
              <FaCheckCircle className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">
                Trusted Professionals
              </h3>
              <p className="text-gray-700">
                All our freelancers are vetted and trusted by clients.
              </p>
            </div>
            <div className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg transition-all">
              <FaHandshake className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">
                Seamless Collaboration
              </h3>
              <p className="text-gray-700">
                Work closely with professionals and achieve the best results.
              </p>
            </div>
            <div className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg transition-all">
              <FaUser className="mx-auto mb-4 text-6xl text-custom-violet" />
              <h3 className="mb-2 font-semibold text-2xl">100% Satisfaction</h3>
              <p className="text-gray-700">
                We ensure client satisfaction with every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-custom-violet py-10 text-white">
        <div className="mx-auto px-4 max-w-7xl text-center">
          <p className="text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
