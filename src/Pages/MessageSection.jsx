import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Messages/Sidebar";
import ChatArea from "../Components/Messages/ChatArea";

const initialChats = {
    "Henry Boyd": [
        { 
            isSent: false, 
            message: "Hey Henry, how are you?", 
            timestamp: "2024-09-15T10:00:00Z" 
        },
        { 
            isSent: true, 
            message: "I'm good, thanks!", 
            timestamp: "2024-09-15T10:01:00Z" 
        },
    ],
    // Other initial chats...
};

const MessageSection = () => {
    const location = useLocation();
    const [activeChat, setActiveChat] = useState("Henry Boyd");
    const [chats, setChats] = useState(initialChats);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get('name');
        console.log(name)
        if (name) {
            initializeChat(name);
            setActiveChat(name);
        }
    }, [location.search]);

    const sendMessage = (chatName, message) => {
        const newChats = { ...chats };
        const timestamp = new Date().toISOString();
        newChats[chatName] = newChats[chatName] || [];
        newChats[chatName].push({ isSent: true, message, timestamp });
        setChats(newChats);
    };

    const initializeChat = (name) => {
        if (name && !chats[name]) {
            const timestamp = new Date().toISOString();
            const newChats = {
                ...chats,
                [name]: [
                    
                ]
            };
            setChats(newChats);
        }
    };

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <Sidebar 
                    chats={chats} // Pass updated chats data
                    activeChat={activeChat} 
                    setActiveChat={setActiveChat} 
                />
                <ChatArea 
                    activeChat={activeChat} 
                    chats={chats} 
                    sendMessage={sendMessage} 
                />
            </div>
        </div>
    );
};

export default MessageSection;
