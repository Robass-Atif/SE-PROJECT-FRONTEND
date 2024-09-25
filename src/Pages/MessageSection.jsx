import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Chat/Sidebar";
import ChatArea from "../Components/Chat/ChatArea";

const ChatSection = () => {
  const location = useLocation();
  const [activeChatId, setActiveChatId] = useState(); // Default active chat ID
  const [chats, setChats] = useState({});
  const userId = "66f2c46b560c53a133c31df9";

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const chatId = queryParams.get("id"); // Assuming you may pass chat ID in the URL
    if (chatId) {
      setActiveChatId(chatId);
      initializeChat(chatId);
    }
  }, [location.search]);

  useEffect(() => {
    // Initialize chat for the active chat ID when it changes
    if (activeChatId) {
      initializeChat(activeChatId);
    }
  }, [activeChatId]);

  const sendMessage = (message) => {
    const newChats = { ...chats };
    const timestamp = new Date().toISOString();
    newChats[activeChatId] = newChats[activeChatId] || [];
    newChats[activeChatId].push({ isSent: true, message, timestamp });
    setChats(newChats);
    // You may want to also handle sending this message to your backend here
  };

  const initializeChat = (chatId) => {
    if (chatId && !chats[chatId]) {
      const newChats = {
        ...chats,
        [chatId]: [],
      };
      setChats(newChats);
    }
  };

  return (
    <div className="flex h-screen text-gray-800 antialiased">
      <div className="flex flex-row w-full h-full overflow-x-hidden">
        <Sidebar
          activeChat={activeChatId} // Pass the activeChatId
          setActiveChat={setActiveChatId} // Update the state when the user selects a chat
          userId={userId}
        />
        <ChatArea
          activeChat={activeChatId} // Use the active chat ID here
          chats={chats}
          sendMessage={sendMessage} // Pass sendMessage function here
        />
      </div>
    </div>
  );
};

export default ChatSection;
