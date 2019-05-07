var express  = require('express'),
app = express(),
cors = require('cors'),
bodyParser= require('body-parser'),
mongodb= require('mongodb').MongoClient,
mongoose = require('mongoose'),
EEE = require('custom-env').env(),

User =require('../App/routes/User'),
getAll = require('./routes/getAll'),
TokenVerification=require('../App/AuthVerify/AuthVerify')
;
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   res.header(" Content-Type", "application/json");
//   next();
// });
  
var MongoUrl =  "mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/HouseholdsDatabase?retryWrites=true";
mongoose.connect(process.env.MongoUrl||MongoUrl,{useNewUrlParser:true});
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