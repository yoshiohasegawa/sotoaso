const UserManager = require("../managers/users");

class UserController {
    async getUser(req, res) {
        try {
            const user = await UserManager.getUser(req);
            res.send(user);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    }

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
            if (response.message === "Wrong password") {
                res.status(403).json(response);
            }
            else if (response.message === "User not found") {
                res.status(404).json(response);
            }
            else if (response.auth) {
                res.cookie("access-token", response.accessToken, {
                    maxAge: 60*60*24*30*1000, httpOnly: true}) // seconds*minutes*hours*days*miliseconds
                res.status(200).json(response);
            }
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new UserController();