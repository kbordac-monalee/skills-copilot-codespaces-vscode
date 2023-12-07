// Create web server
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// Read comments from file
var comments = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/comments.json'), 'utf8'));

// Get all comments
router.get('/', function(req, res, next) {
  res.json(comments);
});

// Get comments for specific post
router.get('/:postId', function(req, res, next) {
  var postId = parseInt(req.params.postId);
  var postComments = comments.filter(function(comment) {
    return comment.postId === postId;
  });
  res.json(postComments);
});

// Add new comment
router.post('/', function(req, res, next) {
  var newComment = {
    commentId: comments.length + 1,
    postId: req.body.postId,