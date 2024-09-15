import React from "react";

const ChatMessage = ({ isSent, message, senderName, timestamp }) => {
    const getInitials = (name) => {
        const nameArray = name.split(" ");
        const initials = nameArray.map((word) => word[0]).join("");
        return initials.toUpperCase();
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div
            className={`${isSent ? "col-start-6 col-end-13" : "col-start-1 col-end-8"} p-3 rounded-lg`}
        >
            <div className={`flex ${isSent ? "items-center justify-start flex-row-reverse" : "items-center"}`}>
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {!isSent ? getInitials(senderName) : 'You'}
                </div>
                <div
                    className={`relative ${isSent ? "mr-3" : "ml-3"} text-sm bg-white py-2 px-4 shadow rounded-xl`}
                >
                    <div>{message}</div>
                    <div className="text-xs text-gray-500 mt-1">{formatDate(timestamp)}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
