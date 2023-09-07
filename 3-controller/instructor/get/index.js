const express = require("express");
const app = express();
const port = 3000;

// //Define a function to handle the "/hello" route
// function helloWorldController(req, res) {
//   console.log(req.params);
//   // Set the content type to HTML
//   res.setHeader("Content-Type", "text/html");
//   // Send the HTML response
//   res.send(
//     "<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello, World!</h1></body></html>"
//   );
// }

// Define a route for the "/hello" path and associate it with the controller

app.get("/user/admin", (req, res) => {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");
  // Send the HTML response
  res.send(
    `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Welcome to admin dashboard!</h1></body></html>`
  );
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");
  // Send the HTML response
  res.send(
    `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello, ${username}!</h1></body></html>`
  );
});

// 404 routes
app.use((req, res) => {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");
  // Send the HTML response
  res.send(
    `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>404 Not Found!</h1></body></html>`
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
