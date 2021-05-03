const express = require("express");
const usersController = require("../controllers/users");

const router = express.Router();

router.use(express.json());
router.post("/", usersController.postUser);

module.exports = router;