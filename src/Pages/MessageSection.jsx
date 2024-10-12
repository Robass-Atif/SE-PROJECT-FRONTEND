import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../Components/Chat/Sidebar";
import ChatArea from "../Components/Chat/ChatArea";
import socket from "../Components/sockets/socket";

const ChatSection = () => {
  const [activeChatId, setActiveChatId] = useState(); // Default active chat ID
  const [activeChatTitle, setActiveChatTitle] = useState()
  const [chats, setChats] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser._id

  useEffect(() => {
    // Establish socket connection when the component mounts
    socket.on("connect", () => {
      console.log("Connected to Socket.io");
    });


    return () => {
      // Cleanup socket connection on unmount
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const chatId = queryParams.get("query"); // Assuming you may pass chat ID in the URL
    if (chatId) {
      setActiveChatId(chatId);

      initializeChat(chatId);
    }
  }, [location.search]);

  useEffect(() => {
    // Initialize chat for the active chat ID when it changes
    if (activeChatId) {
      initializeChat(activeChatId);
      console.log()
    }
  }, [activeChatId]);

  const sendMessage = (message) => {
    const newChats = { ...chats };
    const timestamp = new Date().toISOString();
    newChats[activeChatId] = newChats[activeChatId] || [];
    newChats[activeChatId].push({ isSent: true, message, timestamp });
    setChats(newChats);
  };

  const initializeChat = (chatId) => {
    if (chatId && !chats[chatId]) {
      socket.emit("getChatHistory", chatId); // Fetch chat history
    }
  };

  useEffect(() => {
    // Listen for incoming messages
    socket.on("messageReceived", (newMessage) => {
      const updatedChats = { ...chats };
      updatedChats[newMessage.chatId] = [
        ...(updatedChats[newMessage.chatId] || []),
        newMessage,
      ];
      setChats(updatedChats);
    });

  }, [chats, activeChatId]);

  return (
    <div className="flex h-screen text-gray-800 antialiased">
      <div className="flex flex-row w-full h-full overflow-x-hidden">
        <Sidebar
          activeChat={activeChatId} // Pass the activeChatId
          setActiveChat={setActiveChatId} // Update the state when the user selects a chat
          userId={userId}
          setActiveChatTitle={setActiveChatTitle}
        />
        <ChatArea
          activeChatId={activeChatId} // Use the active chat ID here
          activeChatTitle={activeChatTitle}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default ChatSection