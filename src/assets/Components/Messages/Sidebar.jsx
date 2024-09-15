import React from "react";

const Sidebar = ({initialChats , activeChat, setActiveChat }) => (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">QuickChat</div>
        </div>
        <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48">
                {Object.keys(initialChats).map((chat) => (
                    <ConversationButton
                        key={chat}
                        name={chat}
                        activeChat={activeChat}
                        setActiveChat={setActiveChat}
                    />
                ))}
            </div>
        </div>
    </div>
);

const ConversationButton = ({ name, activeChat, setActiveChat }) => (
    <button
        onClick={() => setActiveChat(name)}
        className={`flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 ${activeChat === name ? "bg-gray-200" : ""
            }`}
    >
        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            {name.charAt(0)}
        </div>
        <div className="ml-2 text-sm font-semibold">{name}</div>
    </button>
);

export default Sidebar;
