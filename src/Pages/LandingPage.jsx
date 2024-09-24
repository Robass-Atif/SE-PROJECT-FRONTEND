import React from 'react';
import { FaWrench, FaLightbulb, FaCheckCircle, FaHandshake, FaUser, FaHammer, FaBrush, FaLock, FaTree } from 'react-icons/fa';
import illustration from '../assets/illustration.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="text-black py-20 relative">
                <div className="max-w-7xl mx-auto px-4 flex items-center relative z-10">
                    {/* Text and Call-to-Action */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                            Find Expert Freelancers <br className="hidden md:block" /> for Your Job
                        </h1>
                        <p className="text-lg mb-8">
                            Professional services for all your needs, from home repairs to digital marketing.
                        </p>

                        <div className="mt-6">
                            <Link to='/role-selection'>

                                <button className="bg-white text-custom-violet border border-custom-violet py-3 px-8 rounded-md font-semibold hover:bg-gray-100 hover:shadow-xl transition-transform transform hover:scale-105">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Illustration */}
                    <div className="hidden md:block w-1/2 flex justify-end">
                        <img
                            src={illustration}
                            alt="Freelancer Illustration"
                            className="w-3/4 h-auto object-contain ml-6"  // Adjusted margin-left here
                        />
                    </div>
                </div>
            </section>





            {/* Popular Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        Popular Services
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Explore the most sought-after services from our experts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaWrench className="text-custom-violet text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Plumbing</h3>
                            <p className="text-gray-700">Certified plumbers for all your needs.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaLightbulb className="text-custom-violet text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Electricians</h3>
                            <p className="text-gray-700">Professional electricians for home and office repairs.</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaHammer className="text-custom-violet text-6xl mx-auto mb-4" /> {/* Updated icon */}
                            <h3 className="text-2xl font-bold mb-2">Carpenter</h3> {/* Updated title */}
                            <p className="text-gray-700">Skilled carpenters for custom furniture and repairs.</p> {/* Updated description */}
                        </div>

                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Explore Categories</h2>
                    <p className="text-lg text-gray-600 mb-10">Discover various services to meet your unique requirements.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all">
                            <FaBrush className="text-custom-violet text-5xl mx-auto mb-4" /> {/* Updated icon */}
                            <h3 className="text-2xl font-semibold mb-2">Painting</h3> {/* Updated title */}
                            <p className="text-gray-700">Professional painting services to enhance your space.</p> {/* Updated description */}
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all">
                            <FaTree className="text-custom-violet text-5xl mx-auto mb-4" /> {/* Updated icon */}
                            <h3 className="text-2xl font-semibold mb-2">Landscaping</h3> {/* Updated title */}
                            <p className="text-gray-700">Expert landscaping for a beautiful and well-maintained garden.</p> {/* Updated description */}
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-all">
                            <FaLock className="text-custom-violet text-5xl mx-auto mb-4" /> {/* Updated icon */}
                            <h3 className="text-2xl font-semibold mb-2">Locksmith</h3> {/* Updated title */}
                            <p className="text-gray-700">Reliable locksmith services for secure and efficient solutions.</p> {/* Updated description */}
                        </div>
                    </div>
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaCheckCircle className="text-custom-violet text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Trusted Professionals</h3>
                            <p className="text-gray-700">All our freelancers are vetted and trusted by clients.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaHandshake className="text-custom-violet text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Seamless Collaboration</h3>
                            <p className="text-gray-700">Work closely with professionals and achieve the best results.</p>
                        </div>
                        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition-all">
                            <FaUser className="text-custom-violet text-6xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">100% Satisfaction</h3>
                            <p className="text-gray-700">We ensure client satisfaction with every project.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

