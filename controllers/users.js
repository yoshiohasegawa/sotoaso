const UserManager = require("../managers/users");

class UserController {
    async postUser(req, res) {
        console.log(`Posting: ${JSON.stringify(req.body)}`);
        try {
            const user = await UserManager.postUser(req);
             console.log(`Response: ${user}`)
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new UserController();