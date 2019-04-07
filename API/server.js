var express= require('express'),
 mongoose = require('mongoose'),
 mongoclient= require('mongodb').MongoClient,
 cors= require('cors');
var app = express();

app.use(cors());
var http = require('https');

var PORT = process.env.PORT||4000;

app.listen(PORT,()=>{
console.log("Server started at "+PORT);

});

function MongoTest(){
var URL='mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/test?retryWrites=true';
mongoclient.connect(URL,{useNewUrlParser:true},(err,db)=>{
if(err) throw err;
var dbo = db.db("HouseHoldsDatabase");
dbo.collection("Users").find({}).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    return result;
});

});}

app.get('/post',(req,res)=>{
    
    var data = MongoTest();
    res.send("hello");
});