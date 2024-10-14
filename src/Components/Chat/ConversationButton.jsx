import React, { act } from "react";
import socket from "../sockets/socket";
const ConversationButton = ({
  name,
  profileImage,
  activeChat,
  setActiveChat,
}) => {
  const handleButtonClick = () => {
    setActiveChat(name)
    socket.emit('joinRoom', activeChat._id)

  }
  return (
    <button
      onClick={handleButtonClick}
      className={`conversation-button ${activeChat === name ? "active" : ""}`}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="profile-image"
      />
      <span className="conversation-name">{name}</span>
    </button>
  );
};

export default ConversationButton;
