// Import the 'http' module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // route /
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home</h1>");
    // route /user
  } else if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>User</h1>");
    // route not found
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Not found</h1>");
  }
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
