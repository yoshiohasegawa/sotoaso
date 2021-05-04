const db = require("../db/db");

class PostManager {
    async getPosts(req) {
        const {postId} = req.params;
        if (postId) {
            const post = await db('posts')
                .join('activity_types',
                      'activity_types.id',
                      'posts.activity_type')
                .select('posts.*', 'activity_types.name')
                .where({id: postId});
            return post;
        }
        const posts = await db('posts')
            .join('activity_types',
                  'activity_types.id',
                  'posts.activity_type')
            .select('posts.*', 'activity_types.name');
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