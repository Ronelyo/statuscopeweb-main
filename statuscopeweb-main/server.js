// Import required modules
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Handle Socket.io connections
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.emit("message", data); // Broadcast message to all users
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start server on local network
server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on local network: http://YOUR_LOCAL_IP:3000");
});
