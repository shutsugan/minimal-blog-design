'use strict';

const post = require('./controllers/post');

module.exports = router => {
  router.route('/post/:id')
    .get(post.getPost);

  router.route('/post')
    .get(post.getPosts)
    .post(post.setPost);
};
