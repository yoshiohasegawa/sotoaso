const express = require("express");
const postController = require("../controllers/posts");
// Verify user though accessing access-token in cookies
const verifyUser = require("./auth");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.use(express.json());
router.use(cookieParser());
router.get("/", postController.getPosts);
router.get("/:postId", postController.getPosts);
router.post("/", verifyUser, postController.postPost);

module.exports = router;