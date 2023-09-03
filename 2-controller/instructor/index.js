const express = require("express");
const app = express();
const port = 3000;

// Define a function to handle the "/hello" route
function helloWorldController(req, res) {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Send the HTML response
  res.send(
    "<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello, World!</h1></body></html>"
  );
}

// Define a route for the "/hello" path and associate it with the controller
app.get("/hello", helloWorldController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
