const db = require("../db/db");

class UsersDAO {
    async getUsers() {
        return "User1";
    }
}

module.exports = new UsersDAO();