const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    description:String,
    date:Date.now
})