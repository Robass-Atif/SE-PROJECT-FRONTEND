import React, { useState } from 'react';

const Review = ({ freelancer, addReview }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating && comment) {
            const newReview = {
                freelancerId: freelancer.id,
                rating,
                comment,
                clientName: "John Doe",  // You can get this dynamically based on the logged-in client
                timestamp: new Date().toISOString(),
            };
            addReview(newReview);
            setRating(0);
            setComment('');
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Review {freelancer.name}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`w-8 h-8 text-lg ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Comment</label>
                    <textarea
                        className="w-full p-2 border rounded-lg"
                        rows="4"
                        placeholder="Write your review here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default Review;
