'use strict';

const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String,
  poster: String,
  created: {
    type: Date,
    default: Date.now()
  }
});

const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;
