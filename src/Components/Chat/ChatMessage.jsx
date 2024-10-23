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
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div
      className={`${
        isSent
          ? "col-start-6 col-end-13 sm:col-start-3 sm:col-end-14"
          : "col-start-1 col-end-8 sm:col-start-1 sm:col-end-10"
      } p-3 rounded-lg`}
    >
      <div
        className={`flex ${
          isSent
            ? "items-center justify-start flex-row-reverse"
            : "items-center"
        }`}
      >
        <div className="flex flex-shrink-0 justify-center items-center bg-indigo-500 rounded-full w-10 h-10 text-white">
          {!isSent ? getInitials(senderName) : "You"}
        </div>
        <div
          className={`relative ${
            isSent ? "mr-3" : "ml-3"
          } text-sm bg-white py-2 px-4 shadow rounded-xl`}
        >
          <div>{message}</div>
          <div className="mt-1 text-gray-500 text-xs">
            {formatDate(timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
