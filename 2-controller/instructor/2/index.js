const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //

// POST route to handle form submission
app.post("/submit", (req, res) => {
  // Access form data from req.body
  const name = req.body.name;
  const email = req.body.email;

  res.status(200).json({ name, email });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
