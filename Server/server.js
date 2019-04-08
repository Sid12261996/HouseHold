var express  = require('express'),
app = express(),
PORT = process.env.PORT||4000,
mongoose = require('mongoose'),
mongodb= require('mongodb').MongoClient,
AppUser =require('../Models/AppUser'),
User= mongoose.model('RegisteredUsers',AppUser),
MongoX=require('../Models/Query').MongoX;


app.listen(PORT,()=>{
    console.log("Listening at Port: "+PORT);
})




    



app.get('/getAll',(req,res)=>{
    
    MongoX.then((result)=>{
        res.send(result);
    },function(err) {
        console.log(err);
    });
})