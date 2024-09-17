import React from 'react';

const ServicesCard = ({ name, description, price, thumbnail, profileImage, rating, numberOfRatings, title }) => (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
            src={thumbnail}
            alt={name}
            className="w-full h-32 object-cover"
        />
        <div className="p-2">
            <div className="flex items-center mb-2">
                <img
                    src={profileImage}
                    alt={name}
                    className="w-8 h-8 rounded-full mr-2"
                />
                <div className="text-sm font-semibold">{name}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2 hover:underline cursor-pointer">
                {title} {/* Title from props */}
            </h3>
            <div className="text-sm mb-2 flex items-center">
                <span className="text-gray-400 text-xl mr-1">★</span> {/* Single star */}
                <span className="mr-2">{rating}</span> {/* Rating value */}
                <span className="text-gray-500">({numberOfRatings} ratings)</span> {/* Number of ratings */}
            </div>
            <div className="text-lg font-bold">From Rs {price}</div> {/* Larger price */}
        </div>
    </div>
);

export default ServicesCard;
