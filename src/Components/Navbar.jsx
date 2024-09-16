import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope, FaHome, FaBars, FaSignInAlt } from 'react-icons/fa'; // Import FaSignInAlt for the sign-in icon
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex flex-col px-6 py-4 bg-white shadow-md">
            {/* Container for the entire Navbar */}
            <div className="w-full max-w-screen-xl mx-auto">
                {/* Top Row for medium and larger screens */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Logo, Sign-In, Service, Home */}
                    <div className="flex items-center flex-shrink-0">
                        <img src="https://via.placeholder.com/100x30?text=Logo" alt="Logo" className="h-8 mr-4" />
                        <span className="text-lg text-gray-600 hover:text-custom-violet transition-colors cursor-pointer mr-4">Services</span>



                    </div>

                    {/* Search Bar */}
                    <div className="flex-grow mx-6 max-w-lg"> {/* Smaller search bar */}
                        <div className="relative">
                            <FaSearch className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-violet"
                            />
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6 flex-shrink-0">
                        <Link to='/'>
                            <FaHome className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        </Link>
                        <FaBell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        <Link to='/message'>
                            <FaEnvelope className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        </Link>
                        {/* <Link to='/profile'>
                            <img
                                src="https://via.placeholder.com/40?text=Profile"
                                alt="Profile"
                                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                            />
                        </Link> */}
                        <Link to='/signup'>
                            <div className="flex items-center text-lg text-gray-600 hover:text-custom-violet transition-colors mr-4 cursor-pointer">
                                <FaSignInAlt className="mr-2" /> {/* Sign-In icon */}
                                <span>Sign Up</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Row for smaller screens */}
                <div className="md:hidden flex items-center justify-between">
                    {/* Logo and Toggle Button */}
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/100x30?text=Logo" alt="Logo" className="h-8" />
                    </div>

                    {/* Toggle Button */}
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>

                {/* Search Bar always visible */}
                <div className="mt-4 md:hidden">
                    <div className="w-full max-w-lg mx-auto"> {/* Smaller search bar */}
                        <div className="relative">
                            <FaSearch className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-violet"
                            />
                        </div>
                    </div>
                </div>

                {/* Toggled Menu */}
                <div
                    className={`flex flex-col mt-4 space-y-4 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <Link to="/service" className="text-gray-600 text-lg hover:text-custom-violet transition-colors text-left">
                        Service
                    </Link>
                    <div className="flex items-center text-lg text-gray-600 hover:text-custom-violet transition-colors text-left">
                        <FaSignInAlt className="mr-2" /> {/* Sign-In icon */}
                        <span>Sign In</span>
                    </div>

                    <div className="flex space-x-4">
                        <Link to='/'>
                            <FaHome className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        </Link>
                        <FaBell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        <Link to='/message'>
                            <FaEnvelope className="h-6 w-6 text-gray-600 cursor-pointer hover:text-custom-violet transition-colors" />
                        </Link>
                        <Link to='/profile'>
                            <img
                                src="https://via.placeholder.com/40?text=Profile"
                                alt="Profile"
                                className="h-10 w-10 rounded-full object-cover cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
