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
            const response = await UserManager.loginUser(req);
            if (response === "Wrong Password") {
                res.status(403).send("Password is incorrect");
            }
            if (response === "Not Found") {
                res.status(404).send("Username is incorrect");
            }
            if (response) {
                res.json(response);
            }
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new UserController();