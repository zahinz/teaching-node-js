// Import the 'http' module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write the response content
  res.end("Hello, World!\n");
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
