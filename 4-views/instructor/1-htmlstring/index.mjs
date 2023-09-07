import express from "express";

const app = express();

app.use(express.static("public"));

// req, res
const controller = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(
    `<!DOCTYPE html><html><head><title>Hello World</title><link rel="stylesheet" href="style.css"></head><body><h1>Hello world!</h1></body></html>`
  );
};

app.get("/", controller);

app.listen(3000, () => {
  console.log("server started as port 3000");
});
