import React from "react";

const ConversationButton = ({
  name,
  profileImage,
  activeChat,
  setActiveChat,
}) => {
  return (
    <button
      onClick={() => setActiveChat(name)}
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
