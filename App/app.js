var express  = require('express'),
app = express(),
bodyParser= require('body-parser'),
mongodb= require('mongodb').MongoClient,
mongoose = require('mongoose'),

User =require('../App/routes/User'),
getAll = require('./routes/getAll'),
TokenVerification=require('../App/AuthVerify/AuthVerify')
;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
  

mongoose.connect(process.env.MongoUrl,{useNewUrlParser:true});
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/Api/getAll',TokenVerification,getAll);
app.use('/Api/User',User);
app.use('Api/protected',TokenVerification,User)
app.get('/*',(req,res)=>{
    res.sendFile('./Index.html',{root:__dirname});
})





module.exports = app;