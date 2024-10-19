// socket.js (Create a reusable socket connection)
import { io } from "socket.io-client";

// Replace with your backend URL
const SOCKET_URL = "https://backend-qyb4mybn.b4a.run";

const socket = io(SOCKET_URL);

export default socket;