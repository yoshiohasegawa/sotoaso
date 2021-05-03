const express = require("express");
const path = require("path");
const usersRouter = require("./users");

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Route for /api
app.use("/api/users", usersRouter);

module.exports = app;