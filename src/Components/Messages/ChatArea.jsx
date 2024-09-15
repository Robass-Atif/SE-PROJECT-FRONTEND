import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatArea = ({ activeChat, chats, sendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() !== "") {
            sendMessage(activeChat, message);
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <div className="flex flex-col h-full overflow-x-auto mb-4">
                    <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">
                            {chats[activeChat].map((chatMessage, index) => (
                                <ChatMessage
                                    key={index}
                                    isSent={chatMessage.isSent}
                                    message={chatMessage.message}
                                    senderName={activeChat} // Pass the name of the active chat as the sender's name
                                    timestamp={chatMessage.timestamp} // Pass the timestamp
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                    <div className="flex-grow ml-4">
                        <form onSubmit={handleSendMessage}>
                            <input
                                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className="ml-4">
                        <button
                            onClick={handleSendMessage}
                            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatArea