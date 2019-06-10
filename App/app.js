var express  = require('express'),
app = express(),
cors = require('cors'),
bodyParser= require('body-parser'),

mongoose = require('mongoose'),

User =require('../App/routes/User'),
getAll = require('./routes/getAll'),
    Url= require('../nodemon.json').env.MongoUrl,
TokenVerification=require('../App/AuthVerify/AuthVerify'),
    feedBack = require('./routes/feedBack'),
    workerService = require('./routes/workService'),
    serviceOffered = require('./routes/ServicesOffered'),
path = require('path'),
dpUpdate= require('./routes/AnyFileUpload');
;
app.use(cors());

//var MongoUrl =  "mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/HouseholdsDatabase?retryWrites=true";


mongoose.connect(Url||process.env.MongoUrl,{useNewUrlParser:true});
mongoose.Promise = global.Promise;

app.use('/app/profilepic',express.static(path.join(__dirname + '/ProfilePic/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/Api/getAll',TokenVerification,getAll);
app.use('/Api/User',User);
console.log(path.join(__dirname + '/ProfilePic'))

app.use('/Api/protected',TokenVerification,User);
app.use('/Api/feedBack',feedBack);
app.use('/Api/worker',TokenVerification,workerService);
app.use('/Api/service',TokenVerification,serviceOffered);
app.use('/api/upload',TokenVerification,dpUpdate)
app.get('/*',(req,res)=>{
    res.sendFile('./Index.html',{root:__dirname});
});





module.exports = app;
