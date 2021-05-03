const usersService = require("../services/users");

class UserController {
    async getUsers(req, res) {
        try {
            const users = await usersService.getUsers(req);
             res.send(users);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new UserController();