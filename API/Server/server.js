var express  = require('express'),
app = express(),
PORT = process.env.PORT||4000,
mongoose = require('mongoose'),
mongodb= require('mongodb').MongoClient;


app.listen(PORT,()=>{
    console.log("Listening at Port: "+PORT);
})

var URL='mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/test?retryWrites=true';

 var MongoX = new Promise(function (resolve,rej){
    mongodb.connect(URL,{useNewUrlParser:true},(err,db)=>{
        if(err) throw err;
        var dbo = db.db('HouseHoldsDatabase');
         dbo.collection("Users").find({}).toArray((err,result)=>{
            if(err) throw err;
       
         
                resolve(result);
            
        }); 
    });
    
})


app.get('/getAll',(req,res)=>{
    
    MongoX.then((result)=>{
        res.send(result);
    },function(err) {
        console.log(err);
    });
})