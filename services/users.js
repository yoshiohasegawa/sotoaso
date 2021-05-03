const usersDAO = require("../dao/users");

class UserService {
    getUsers(req) {
        const users = usersDAO.getUsers();
        return users;
    }
}

module.exports = new UserService();