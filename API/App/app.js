var express  = require('express'),


mongoose = require('mongoose'),

AppUser =require('../Models/AppUser'),

MongoX=require('../Models/Query').MongoX;
app = express.Router();

app.get('/getAll',(req,res)=>{
    
    MongoX.then((result)=>{
        console.log(result);
        res.send(result);
    },function(err) {
        console.log(err);
    });
})