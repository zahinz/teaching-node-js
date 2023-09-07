const express = require("express");

// create server
const server = express();

// create route /
server.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Home</h1>");
});

// create route /user
server.get("/user", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>User</h1>");
});

server.use((req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Not found</h1>");
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});
