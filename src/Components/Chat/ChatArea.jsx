import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ChatMessage from "./ChatMessage";
import { fetchMessageHistory } from "../../Api/api";
import socket from "../sockets/socket";

const ChatArea = ({ activeChatId, userId, sendMessage, activeChatTitle }) => {
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();
  
  const {
    data: messages = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["chatHistory", activeChatId],
    queryFn: () => fetchMessageHistory(activeChatId),
    enabled: !!activeChatId,
  });

  useEffect(() => {
    if (socket && !socket.connected) {
      console.log("Socket is not connected. Trying to connect...");
      socket.connect(); // Ensure the socket is connected
    }
    if (activeChatId) {
      // Join the chat room when the chat ID is available
      socket.emit("joinChat", activeChatId);
      
      
      socket.on("messageReceived", (newMessage) => {
        queryClient.setQueryData(["chatHistory", activeChatId], (oldMessages) => [
          ...(oldMessages || []),
          newMessage,
        ]);
      });
      return () => {
        socket.off("messageReceived");
      };
  
    }
  }, [activeChatId, socket]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      try {
        const messageData = {
          chatId: activeChatId,
          senderId: userId,
          text: message,
        };
        socket.emit('joinChat', activeChatId)
        queryClient.setQueryData(["chatHistory", activeChatId], (oldMessages) => [
          ...(oldMessages || []),
          {
            _id: Date.now(), // Temporary ID for the new message
            sender: userId,
            message_text: message,
            sent_at: new Date().toISOString(),
          },
        ]);
        socket.emit("sendMessage", messageData); // Emit the message via socket
        
        setMessage("");
      } catch (error) {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      }
    }
  };

  if (isLoading) return <div className="text-center">Loading messages...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error fetching messages</div>
    );

  return (
    <div className="flex flex-col flex-auto bg-gray-50 shadow-lg p-6 rounded-3xl h-full">
      {/* Chat Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md mb-4 p-4 rounded-lg">
        <div className="flex items-center">
          <img
            src="/path/to/profile/image.jpg"
            alt={`${activeChatId}'s profile`}
            className="mr-2 rounded-full w-10 h-10"
          />
          <div>
            <h2 className="font-bold text-2xl text-white">{activeChatTitle}</h2>
            <span className="text-gray-200 text-sm">Online</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-auto bg-gray-100 p-4 rounded-lg h-full overflow-hidden">
        <div className="flex flex-col flex-grow mb-4 scrollbar-thumb-gray-400 overflow-y-auto scrollbar-thin scrollbar-track-gray-200">
          {messages.map((chatMessage) => (
            <ChatMessage
              key={chatMessage._id}
              isSent={chatMessage.sender === userId}
              message={chatMessage.message_text}
              senderName={chatMessage.sender}
              timestamp={new Date(chatMessage.sent_at).toLocaleString()}
            />
          ))}
        </div>

        <form
          onSubmit={handleSendMessage}
          className="flex items-center bg-white shadow-sm rounded-xl w-full h-16"
        >
          <input
            className="flex-grow border-gray-300 focus:border-indigo-500 pl-4 border rounded-xl focus:outline-none h-10 transition duration-200"
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 ml-2 px-4 py-1 rounded-xl text-white transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea