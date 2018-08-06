'use strict';

const mongoose = require('mongoose');
const Posts = mongoose.model('Posts');
const utils = require('../utils');
const jsonResponse = utils.jsonResponse;

module.exports.getPost = (req, res) => {
  const post_id = req.params.id;

  Posts.find({_id: post_id}, (err, post) => {
    if (err) return jsonResponse(res, 401, err);

    if (!post) return jsonResponse(res, 401, {'message': 'No post with this id'});
    else return jsonResponse(res, 200, post);
  });
};

module.exports.getPosts = (req, res) => {
  Posts.find({}, (err, posts) => {
    if (err) return jsonResponse(res, 401, err);

    if (!posts) return jsonResponse(res, 401, {'message': 'No posts exist'});
    else return jsonResponse(res, 200, posts);
  });
};

module.exports.setPost = (req, res) => {
  const {author, title, body, poster} = req.body;

  Posts.create({
      author,
      title,
      body,
      poster
  }, (err, post) => {
    if (err) return jsonResponse(res, 401, err);

    return jsonResponse(res, 201, post);
  });
};
