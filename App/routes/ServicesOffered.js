const servicesOffered = require('../../Models/Services'),
    Router = require('express').Router(),
gService = require('../genericFunctions/genericFunctions');
const mongoose = require("mongoose");

Router.get('/all',(req,res)=>{
    gService.genericFindAll(servicesOffered,req,res);
});


Router.get('/:id',(req,res)=>{
    gService.genericFindById(servicesOffered,req,res);
});

Router.post('',(req,res)=>{
    gService.genericFind(servicesOffered,req,res)

    var newService = new servicesOffered({
        _id:new mongoose.Types.ObjectId(),
        BookingDate: new Date(),
        UserId:mongoose.Types.ObjectId(req.body.UserId),
        DateOfService: new Date(req.body.DateOfService),
        ServiceName:req.body.ServiceName

    });

   gService.genericSave(newService,req,res)
});

Router.delete('/:id',(req,res)=>{
    gService.genericDeletion(servicesOffered,req,res);
});

Router.put('/:id',(req,res)=>{
    gService.genericUpdate(servicesOffered,req,res);
});


module.exports=Router;

