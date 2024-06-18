const WebSocket = require("websocket").server;
const http = require("http");

const server = http.createServer((request, response) => {
  // Handle HTTP requests here
});

server.listen(3001, () => {
  console.log("WebSocket server is listening on port 3001");
});
