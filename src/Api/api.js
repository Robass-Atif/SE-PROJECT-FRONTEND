import axios from "axios";

// Fetch Chats
export const fetchChats = async (userId) => {
  const { data } = await axios.get(`https://backend-qyb4mybn.b4a.run/chat/user/${userId}`);
  return data;
};

// Fetch Message History
export const fetchMessageHistory = async (chatId) => {
  const { data } = await axios.get(
    `https://backend-qyb4mybn.b4a.run/messages/chats/${chatId}/history`
  );
  return data;
};

// Send a Message
export const sendMessage = async (chatId, message) => {
  await axios.post(`https://backend-qyb4mybn.b4a.run/messages/chats/${chatId}/messages`, {
    message,
  });
};
