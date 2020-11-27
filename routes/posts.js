const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

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

module.exports = router;