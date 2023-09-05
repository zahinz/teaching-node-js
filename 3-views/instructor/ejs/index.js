// Import required modules
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS template
app.get('/', (req, res) => {
  // Data to pass to the template (replace with your own data)
  const data = {
    title: 'Hello, EJS!',
    message: 'This is an example of EJS template rendering.'
  };

  // Render the EJS template and pass data to it
  res.render('index', data);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


