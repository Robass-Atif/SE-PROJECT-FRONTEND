import React from 'react';
import { FaSearch, FaBell, FaEnvelope, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex flex-col px-6 py-4 bg-white shadow-md">
            {/* Container for the entire Navbar */}
            <div className="w-full max-w-screen-xl mx-auto">
                {/* Top Row (Logo, Search Bar, Icons) for medium and larger screens */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img src="https://via.placeholder.com/100x30?text=Logo" alt="Logo" className="h-8" />
                    </div>

                    {/* Search Bar */}
                    <div className="flex-grow mx-6 max-w-4xl">
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
                            <FaHome className="h-6 w-6 text-gray-600 cursor-pointer" />
                        </Link>
                        <FaBell className="h-6 w-6 text-gray-600 cursor-pointer" />
                        <Link to='/message'>
                            <FaEnvelope className="h-6 w-6 text-gray-600 cursor-pointer" />
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

                {/* Row for smaller screens */}
                <div className="md:hidden flex flex-col items-center">
                    {/* Logo and Icons on the same line */}
                    <div className="flex items-center mb-4">
                        <div className="flex items-center flex-shrink-0 mr-4">
                            <img src="https://via.placeholder.com/100x30?text=Logo" alt="Logo" className="h-8" />
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link to='/'>
                                <FaHome className="h-6 w-6 text-gray-600 cursor-pointer" />
                            </Link>
                            <FaBell className="h-6 w-6 text-gray-600 cursor-pointer" />
                            <Link to='/message'>
                                <FaEnvelope className="h-6 w-6 text-gray-600 cursor-pointer" />
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

                    {/* Search Bar on a new line */}
                    <div className="w-full max-w-4xl">
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
            </div>
        </nav>
    );
};

export default Navbar;
