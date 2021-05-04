const express = require("express");
const path = require("path");
const usersRouter = require("./users");
const postsRouter = require("./posts");

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
// Route for /api/users
app.use("/api/users", usersRouter);
// Route for /api/posts
app.use("/api/posts", postsRouter);

module.exports = app;