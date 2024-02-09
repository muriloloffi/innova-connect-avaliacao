import express from "express";

var app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;