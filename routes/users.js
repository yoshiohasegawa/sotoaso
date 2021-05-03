const express = require("express");
const usersController = require("../controllers/users");

const router = express.Router();

router.unsubscribe(express.json());
router.get("/", usersController.getUsers);

module.exports = router;