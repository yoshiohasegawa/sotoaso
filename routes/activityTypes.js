const express = require("express");
const activityTypeController = require("../controllers/activityTypes");

const router = express.Router();

router.use(express.json());
router.get("/", activityTypeController.getActivityTypes);


module.exports = router;