const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
