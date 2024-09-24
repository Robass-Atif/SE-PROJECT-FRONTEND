import React, { useState } from 'react';

const HireModal = ({ onClose }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a server)
        console.log({ date, time, price, description });
        onClose(); // Close the modal after submission
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Hire Service</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-sm font-medium mb-1">Price (Rs)</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium mb-1">Work Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            className="border-gray-300 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-custom-violet w-full focus:outline-none"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-sm font-medium text-gray-800 mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-custom-violet hover:bg-custom-violet-dark py-2 px-4 rounded-md text-sm font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HireModal;
