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

  // Respond with an HTML page that includes the submitted data
  const responseHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Form Submission Result</title>
    </head>
    <body>
        <h1>Form Submission Result</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    </body>
    </html>
  `;

  res.send(responseHtml);
});

// Serve an HTML form when accessing the root route ("/")
app.get("/", (req, res) => {
  const htmlForm = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Form Example</title>
    </head>
    <body>
        <h1>Submit Form</h1>
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <input type="submit" value="Submit">
        </form>
    </body>
    </html>
  `;

  res.send(htmlForm);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
