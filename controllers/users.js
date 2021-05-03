const UserManager = require("../managers/users");

class UserController {
    async postUser(req, res) {
        try {
            const createdUser = await UserManager.postUser(req);
            res.send(createdUser);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };

    async loginUser(req, res) {
        try {
            const user = await UserManager.loginUser(req);
            if (user === "Wrong Password") {
                res.status(403).send("Password is incorrect");
            }
            if (user === "Not Found") {
                res.status(404).send("Username is incorrect");
            }
            if (user) {
                res.send(user);
            }
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new UserController();