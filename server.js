var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
const routes = require('./routes/index.js');
var errorhandler = require('errorhandler');


let store = {
  posts: [
    {	
    	name: 'abd',
    	url: 'abd',
    	text: 'abd',
    	comments: [{
      		text:'abc'}
      		]
    }
  ]
}


let app = express()
app.use(bodyParser.json());
app.use(errorhandler());
app.use(logger('dev'));
app.use((req, res, next) => {
  req.store = store
  next()
})

app.get('/posts', routes.posts.getPosts)
app.post('/posts', routes.posts.addPost)
app.put('/posts/:postId', routes.posts.updatePost)
app.delete('/posts/:postId', routes.posts.removePost)

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comments', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId',routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId',routes.comments.removeComment)

// app.get('/posts', getPosts)
// app.post('/posts', addPost)

app.listen(3000)

module.exports = app