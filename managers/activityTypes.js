const db = require("../db/db");

class ActivityTypeManager {
    async getActivityTypes(req) {
        const activityTypes = await db('activity_types');
        return activityTypes;
    };
}

module.exports = new ActivityTypeManager();