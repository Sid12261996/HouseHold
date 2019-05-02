const express = require('express'),
app = express(),
path = require('path');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://wraapitup.herokuapp.com/api/getall");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, contenttype, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
  
    next();
  });

app.use(express.static(path.join(__dirname+'/dist/wrapItUp')));
console.log(path.join(__dirname+'/dist/wrapItUp'));
app.listen(process.env.PORT||5000,()=>console.log('Connected!'));

app.get('/*',(req,res)=>{
    console.log("route..!")
    res.sendFile(path.join(__dirname,'/dist/wrapItUp/index.html'));
});