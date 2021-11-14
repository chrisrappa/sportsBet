import express from 'express';
import Post from '../models/postModel';
import { isAuth, isAdmin } from '../util.js';

const router = express.Router();

router.get("/", isAuth, async (req, res) => {
  const posts = await Post.find({}).populate('user');
  res.send(posts);
});

router.get("/mine", isAuth, async (req, res) => {
  const posts = await Post.find({user: req.user._id});
  res.send(posts);
});


router.get("/:id", isAuth, async (req,res) => {
  const post = await Post.findOne({_id: req.params.id});
  if(post){
    res.send(post);
  } else {
    res.status(404).send("Post Not Found");
  }
})

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (post) {
    const deletedPost = await post.remove();
    res.send(deletedPost);
  } else {
    res.status(404).send("Post Not Found.")
  }
});

router.post("/", isAuth, async (req, res) => {
    const newPost = new Post({
      user: req.user._id,
      postItems: req.body.postItems,
    });
    const newPostCreated = await newPost.save();
    res.status(201).send({ message: "New Post Created", data: newPostCreated });
  });



export default router;