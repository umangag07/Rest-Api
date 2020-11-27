const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')


const app = express();

app.use(bodyParser.json());


const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Middlewares(Its like function are execited when routes are being hit)

// Routes
app.get('/', (req,res)=>{
    res.send('we are on home')
})


// connect to db

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log("connected to db");

})
//How we start listening to the server
app.listen(3000);