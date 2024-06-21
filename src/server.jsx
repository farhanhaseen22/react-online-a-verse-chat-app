import { WebSocketServer } from "ws";
import { createServer } from "http";

import { uuid } from "uuidv4";

// Spinning the HTTP server and the WebSocket server.
const server = createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;

const clients = {};

// A new client connection request received
wsServer.on("connection", function (connection) {
  // Generate a unique code for every user
  const userId = uuid.v4();
  console.log(`Received a new connection.`);

  // Store the new connection and handle messages
  clients[userId] = connection;
  console.log(`User-Id=${userId}; connected.`);
});

server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});
