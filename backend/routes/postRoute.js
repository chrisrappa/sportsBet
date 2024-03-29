import express from 'express';
import Post from '../models/postModel';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
    // const category = req.query.category ? {category: req.query.category} : {};
    // const searchKeyword = req.query.searchKeyword ? {
    //   name: {
    //       $regex: req.query.searchKeyword,
    //       $options: 'i'
    //   }
    // } : {};
    // const sortOrder = { _id: -1 };
    const posts = await Post.find(
      // {...category, ...searchKeyword}
      )
      // .sort(sortOrder);
    res.send(posts);
})

router.get("/mine/:name", async (req, res) => {
  const posts = await Post.find({username: req.params.name});
  res.send(posts);
});

router.get('/:id', async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    if(post) {
        res.send(post);
    } else {
        res.status(404).send({message: 'Post Not Found.'});
    }
});

router.put('/:id', async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);

  switch(req.body.type){
    case "upvotes" : 
      post.upvotes = req.body.upvote;
      break;
    case "downvotes" :
      post.downvotes = req.body.downvote;
      break;

    case "comments" :
      post.comments.push(req.body.comment);
      post.numComments = post.comments.length;
      break;
    case "posts" :
      post.title = req.body.title;
      post.image = req.body.image;
      post.category = req.body.category;
      post.description = req.body.description;
      break;
    default: return;
  }
  
  const updatedPost = await post.save();
  if(updatedPost){
    return res.status(200).send({message: 'Post Updated', data: updatedPost});
  }

  return res.status(500).send({message: 'Error in Updating Post'});
});

router.post('/', async (req, res) => {

  const post = new Post({
    title: req.body.post.title,
    image: req.body.post.image,
    category: req.body.post.category,
    description: req.body.post.description,
    upvotes: req.body.post.upvotes,
    downvotes: req.body.post.downvotes,
    time: Date.now(),
    username: req.body.userInfo.name,
    comments: [],
    numComments: 0
  });

  const newPost = await post.save();
  if(newPost){
      return res.status(201).send({message: 'New Post Created', data: newPost});
  }
  return res.status(500).send({message: 'Error in Creating Post'});
});


export default router;