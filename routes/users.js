const express = require("express");
const userController = require("../controllers/users");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const router = express.Router();

function verifyUser(req, res, next) {
  const accessToken = req.cookies["access-token"];
  if (accessToken) {
    jwt.verify(accessToken, process.env.REACT_APP_ACCESS_TOKEN_SECRET, (err) => {
        if (err) {
            res.status(400).json({auth: false, message: "Failed to authenticate"});
        } else {
            req.authenticated = true;
            return next();
        }
    })
  }
  if (!accessToken) {
    res.status(400).send({auth: false, message: "Missing authentication token"})
  }
};

router.use(express.json());
router.use(cookieParser());
router.get("/:id", verifyUser, userController.getUser);
router.post("/signup", userController.postUser);
router.post("/login", userController.loginUser)
router.post("/logout", userController.logoutUser);

module.exports = router;