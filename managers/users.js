const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserManager {
    // TODO: Implement GET user/:id
    async getUser(req) {
        console.log('Warning: Still in development...')
        return;
    };

    async postUser(req) {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt);
        const user = {email: req.body.email, username: req.body.username, password: hashed};
        const [createdUser] = await db("users").insert(user).returning(["email", "username"]);
        return createdUser;
    };

    async loginUser(req) {
        const user = await db("users").where({username: req.body.username}).first();
        if (user) {
            if (await bcrypt.compare(req.body.password, user.password)) {
                const accessToken = jwt.sign(user, process.env.REACT_APP_ACCESS_TOKEN_SECRET, {expiresIn: 300});
                const response = {id: user.id, email: user.email, username: user.username, accessToken, auth: true};
                return response;
            }
            return {email: user.email, username: user.username, auth: false, message: "Wrong password"};
        }
        return {auth: false, message: "User not found"};
    };
}

module.exports = new UserManager();