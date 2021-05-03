const db = require("../db/db");
const bcrypt = require("bcrypt");

class UserManager {
    async postUser(req) {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt);
        const user = {email: req.body.email, username: req.body.username, password: hashed};
        const [createdUser] = await db("users").insert(user).returning(["email", "username"]);
        return createdUser;
    }

    async loginUser(req) {
        const user = await db("users").where({username: req.body.username}).first();
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                return user;
            }
            return "Wrong Password";
        }
        return "Not Found";
    }
}

module.exports = new UserManager();