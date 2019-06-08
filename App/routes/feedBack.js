const feedBack = require('../../Models/feedBack'),
    express =require('express'),
    Router= express.Router(),
    mongoose= require('mongoose'),
    genericFeedback= require('../genericFunctions/genericFunctions');


Router.get('/All',(req,res)=>{
    genericFeedback.genericFindAll(feedBack,req,res)
});

Router.get('/:id',(req,res)=>{
    genericFeedback.genericFindById(feedBack,req,res)
});

Router.post('/post',(req,res)=>{
    console.log(res.body)
    toSave = new feedBack({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        body:req.body.body,
        sentBy:mongoose.Types.ObjectId(req.body.sentBy),
        rating:req.body.rating,
       replyId:req.body.replyId,
        createdAt:Date(),


    })
    genericFeedback.genericSave(toSave,req,res)
});

Router.delete('',(req,res)=>{
    genericFeedback.genericDeletion(req.params.id, feedBack, req, res);
});

Router.put('',(req,res)=>{
    genericFeedback.genericUpdate(req,res,feedBack);
});

module.exports=Router;
