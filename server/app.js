const express = require("express");
const path = require("path");

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/world", (req, res) => {
  res.send("Hello World!")
})

module.exports = app;