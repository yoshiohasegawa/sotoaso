const ActivityTypeManager = require("../managers/activityTypes");

class ActivityTypeController {
    async getActivityTypes(req, res) {
        try {
            const activityTypes = await ActivityTypeManager.getActivityTypes(req);
            res.send(activityTypes);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new ActivityTypeController();