var express  = require('express'),
app = express(),
cors = require('cors'),
bodyParser= require('body-parser'),

mongoose = require('mongoose'),

User =require('../App/routes/User'),
getAll = require('./routes/getAll'),
    Url= require('../nodemon.json').env.MongoUrl,
TokenVerification=require('../App/AuthVerify/AuthVerify')
;
app.use(cors());

//var MongoUrl =  "mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/HouseholdsDatabase?retryWrites=true";


mongoose.connect(Url||process.env.MongoUrl,{useNewUrlParser:true});
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/Api/getAll',TokenVerification,getAll);
app.use('/Api/User',User);
app.use('Api/protected',TokenVerification,User);
app.get('/*',(req,res)=>{
    res.sendFile('./Index.html',{root:__dirname});
});





module.exports = app;
