const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

//Middlewares(Its like function are execited when routes are being hit)

// Routes
app.get('/', (req,res)=>{
    res.send('we are on home')
})
app.get('/posts', (req,res)=>{
    res.send('we are on post')
})

// connect to db

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log("connected to db");

})
//How we start listening to the server
app.listen(3000);