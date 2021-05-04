const PostManager = require("../managers/posts");

class PostController {
    async getPosts(req, res) {
        try {
            const posts = await PostManager.getPosts(req);
            res.send(posts);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };

    async postPost(req, res) {
        try {
            const createdPost = await PostManager.postPost(req);
            res.status(201).send(createdPost);
        } catch (err) {
            console.error(err);
            res.status(500).end();
        }
    };
}

module.exports = new PostController();