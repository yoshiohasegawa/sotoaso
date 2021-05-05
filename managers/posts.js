const db = require("../db/db");

class PostManager {
    async getPosts(req) {
        const {postId} = req.params;
        if (postId) {
            const post = await db('posts').where({id: postId}).first();
            return post;
        }
        const posts = await db('posts')
            .join('activity_types',
                  'activity_types.id', 
                  'posts.activity_type')
            .join('users',
                  'users.id',
                  'posts.user_id')
            .select('posts.*', 'activity_types.activity_name', 'users.username');
        return posts;
    };

    async postPost(req) {
        const post = {
            title: req.body.title,
            activity_type: req.body.activity_type,
            body: req.body.body,
            user_id: req.body.user_id};
        const [createdPost] = await db("posts").insert(post).returning(["id", "title"]);
        return createdPost;
    };
}

module.exports = new PostManager();