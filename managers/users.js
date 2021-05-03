const db = require("../db/db");
const bcrypt = require("bcrypt");

class UserManager {
    async postUser(req) {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt);
        const user = {email: req.body.email, username: req.body.username, password: hashed};
        console.log(`Inserting into db: ${JSON.stringify(user)}`);
        const createdUser = await db("users").insert(user).returning("id");
        return createdUser;
    }
}

module.exports = new UserManager();