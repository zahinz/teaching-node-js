// Import required modules
const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route that renders an EJS template
app.get("/", (req, res) => {
  // Data to pass to the template (replace with your own data)
  const data = {
    title: "Hello, Zahin!",
    message: "This is an example of EJS template rendering.",
  };

  // Render the EJS template and pass data to it
  res.render("page", data);
});

app.get("/account/:name", (req, res) => {
  const name = req.params.name;
  res.render("account", { name: name });
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
