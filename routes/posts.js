module.exports = {
  getPosts(req, res){
  	if (req.params.postId){
  		const id = req.params.postId
  		res.status(200).send(req.store.posts[id])
  	}
  	else {
  	res.status(200).send(req.store.posts)
  	}
  },
  addPost(req, res){
  	let newPost = req.body
	let postId = req.store.posts.length
	req.store.posts.push(newPost)
	res.status(201).send({id:postId})
  }, 
  updatePost(req, res) {
  	const id = req.params.postId
  	req.store.posts[id] = req.body
	res.status(200).send(req.store.posts[id])
  },
  removePost(req, res) {
  	const id = req.params.postId
  	req.store.posts.splice(id, 1)
	res.status(204).send()
  }
}