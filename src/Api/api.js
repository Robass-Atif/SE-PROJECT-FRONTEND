import axios from "axios";

// Fetch Chats
export const fetchChats = async (userId) => {
  const { data } = await axios.get(`http://localhost:8080/chat/user/${userId}`);
  return data;
};

// Fetch Message History
export const fetchMessageHistory = async (chatId) => {
  const { data } = await axios.get(
    `http://localhost:8080/messages/chats/${chatId}/history`
  );
  return data;
};

// Send a Message
export const sendMessage = async (chatId, message) => {
  await axios.post(`http://localhost:8080/messages/chats/${chatId}/messages`, {
    message,
  });
};
