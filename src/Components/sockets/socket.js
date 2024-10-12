// socket.js (Create a reusable socket connection)
import { io } from "socket.io-client";

// Replace with your backend URL
const SOCKET_URL = "http://localhost:8080";

const socket = io(SOCKET_URL);

export default socket;