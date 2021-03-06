const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// Gets all the post
router.get('/',async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
})

router.get('/specific', (req,res)=>{
    res.send('we are on specific post')
})

// Submit a post
router.post('/', async (req, res)=>{
    console.log(req.body)
    const post1 = new Post({
        title:req.body.title,
        description:req.body.description 
    });

    try{
        const savedPost = await post1.save()
        res.json(savedPost)
    }catch(err){
        res.json({message:err})
    }
    
})

//Get a specific post
router.get('/:postId', async (req,res)=>{
    //console.log(req.params.postId)
    try{
        const S_Post= await Post.findById(req.params.postId)
        res.json(S_Post)
    }catch(err){
        res.json({message:err})
    }
    
})

//Delete specific post

router.delete('/:postId', async (req,res)=>{
    try{
       const removePost = await Post.remove({_id:req.params.postId})
       res.json(removePost)
    }catch(err){
        res.json({message:err}) 
    }
})

// Update the post
router.patch('/:postId', async (req,res)=>{
    try{
       const updatePost = await Post.update(
           {_id:req.params.postId},
           { $set:{title:req.body.title}}
        )
       res.json(updatePost)
    }catch(err){
        res.json({message:err}) 
    }
})
module.exports = router;