module.exports = {
  getComments(req, res) {
  	const postId = req.params.postId
  	res.status(200).send(req.store.posts[postId].comments)
    
  }, 
  addComment(req, res) {
  	const postId = req.params.postId
    let newComment = req.body
    if(req.store.posts[postId].comments.length){
    	let commentId = req.store.posts[postId].comments.length
    	req.store.posts[postId].comments.push(newComment)
    	res.status(201).send({postId:postId, commentId:commentId})
    }
    else {
      let commentId = 0;
      req.store.posts[postId].comments.push(newComment)
      res.status(201).send({postId:postId, commentId:commentId})
    }

  },
  updateComment(req, res) {
  	const postId = req.params.postId
  	const commentId = req.params.commentId
  	req.store.posts[postId].comments[commentId] = req.body
	res.status(200).send(req.store.posts[postId].comments[commentId])    
  },
  removeComment(req, res) {
    const postId = req.params.postId
    const commentId = req.params.commentId
  	req.store.posts[postId].comments.splice(commentId, 1)
	res.status(204).send()
  }  
}

