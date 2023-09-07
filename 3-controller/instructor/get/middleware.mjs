import express from "express";

const app = express();

// req, res
const controller = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(
    `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello world!</h1></body></html>`
  );
};

const middlware = (req, res, next) => {
  if (req.params.user === "zahin") {
    // important
    next();
  } else {
    res.send(
      `<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Opss! You are not allowed</h1></body></html>`
    );
  }
};

app.get("/:user", middlware, middlware, middlware, controller);

app.listen(3000, () => {
  console.log("server started as port 3000");
});
