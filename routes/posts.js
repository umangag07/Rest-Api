const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res)=>{
    res.send('we are on post')
})
router.get('/specific', (req,res)=>{
    res.send('we are on specific post')
})
router.post('/', (req, res)=>{
    console.log(req.body)
    const post1 = new Post({
        title:req.body.title,
        description:req.body.description 
    });

    post1.save()
     .then(data =>{
         res.json(data)
     })
     .catch(err =>{
         res.json({message:err});
     })
})

module.exports = router;