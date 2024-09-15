import React, { useState } from "react";
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
    "Marta Curtis": [
        { 
            isSent: false, 
            message: "Hi Marta!", 
            timestamp: "2024-09-15T10:05:00Z" 
        },
        { 
            isSent: true, 
            message: "Hey! How's it going?", 
            timestamp: "2024-09-15T10:06:00Z" 
        },
    ],
    "Philip Tucker": [
        { 
            isSent: false, 
            message: "Hey Philip!", 
            timestamp: "2024-09-15T10:10:00Z" 
        },
        { 
            isSent: true, 
            message: "What's up?", 
            timestamp: "2024-09-15T10:11:00Z" 
        },
    ],
    "Christine Reid": [
        { 
            isSent: false, 
            message: "Hello Christine!", 
            timestamp: "2024-09-15T10:15:00Z" 
        },
        { 
            isSent: true, 
            message: "Hi!", 
            timestamp: "2024-09-15T10:16:00Z" 
        },
    ],
    "Jerry Guzman": [
        { 
            isSent: false, 
            message: "Hi Jerry!", 
            timestamp: "2024-09-15T10:20:00Z" 
        },
        { 
            isSent: true, 
            message: "Hello!", 
            timestamp: "2024-09-15T10:21:00Z" 
        },
    ],
};


const MessageSection = () => {
    const [activeChat, setActiveChat] = useState("Henry Boyd");
    const [chats, setChats] = useState(initialChats);

    const sendMessage = (chatName, message) => {
        const newChats = { ...chats };
    
       
        const timestamp = new Date().toISOString();
    
        
        newChats[chatName].push({ isSent: true, message, timestamp });
    
        
        setChats(newChats);
    };

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <Sidebar initialChats={initialChats} activeChat={activeChat} setActiveChat={setActiveChat} />
                <ChatArea activeChat={activeChat} chats={chats} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default MessageSection;
