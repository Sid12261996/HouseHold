var express  = require('express'),
app = express(),
Router = express.Router(),
mongodb= require('mongodb').MongoClient,
mongoose = require('mongoose'),

AppUser =require('../Models/AppUser')

;


app.get('/',(req,res)=>{
    res.sendFile('./Index.html',{root:__dirname});
})
app.get('/getAll',(req,res)=>{
  
    MongoX.then((result)=>{
        res.send(result);
    },function(err) {
        console.log(err);
    });
})
URL='mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/test?retryWrites=true';
MongoX = new Promise(function (resolve,rej){
   
    mongodb.connect(URL,{useNewUrlParser:true},(err,db)=>{
        if(err) throw err;
        var dbo = db.db('HouseHoldsDatabase');
         dbo.collection("Users").find({}).toArray((err,result)=>{
            if(err) throw err;
            
                resolve(result);
            
        }); 
    });
});


module.exports = app;