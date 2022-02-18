const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");




// this is the route for creating a new post
router.post('/createPost', (req, res) => {
    const { title, description, user } = req.body
    console.log(title, description, user)
    if (!title || !description || !user) {
        return res.status(422).json({ message: "Please add all fields" })
    }
    const post = new Post({
        title,
        description,
        user,
    })

    // saving the post. If there is an error, it will be displayed
    post.save().then(result => {
            res.json({ post: result })
        })
        .catch(err => {
            console.log(err)
        })
})

// this is the route to display all the available posts in a sorted order according to posting time
router.get('/allPosts', (req, res) => {
    // finding all the posts avaibale
    Post.find()
        .sort('-createdAt')
        .then((posts) => {
            res.json({ posts })
        })
        .catch(err => {
            console.log(err)
        })
})



module.exports = router;