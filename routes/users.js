const express = require("express");
const userController = require("../controllers/users");
// Verify user though accessing access-token in cookies
const verifyUser = require("./auth");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.use(express.json());
router.use(cookieParser());
router.get("/:id", verifyUser, userController.getUser);
router.post("/signup", userController.postUser);
router.post("/login", userController.loginUser)
router.post("/logout", userController.logoutUser);

module.exports = router;