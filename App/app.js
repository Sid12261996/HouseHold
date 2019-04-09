var express  = require('express'),
app = express(),

mongoose = require('mongoose'),

AppUser =require('../Models/AppUser'),

MongoX=require('../Models/Query').MongoX;


app.get('/getAll',(req,res)=>{
    
    MongoX.then((result)=>{
        res.send(result);
    },function(err) {
        console.log(err);
    });
})