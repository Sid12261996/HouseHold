const servicesOffered = require('../../Models/Services'),
    Router = require('express').Router(),
    gService = require('../genericFunctions/genericFunctions');
const mongoose = require("mongoose");

Router.get('/all', (req, res) => {
    gService.genericFindAll(servicesOffered, req, res);
});


Router.get('/:UserId', (req, res) => {
    gService.genericFind(servicesOffered, req, res, {UserId: req.params.UserId});
});

Router.get('/pending/:UserId',(req,res)=>{
    gService.genericFind(servicesOffered,req,res,{$and:[{UserId:req.params.UserId},{isCompleted:'false'}]})
})

Router.post('', (req, res) => {


    var newService = new servicesOffered({
        _id: new mongoose.Types.ObjectId(),
        BookingDate: new Date(),
        UserId: mongoose.Types.ObjectId(req.body.UserId),
        DateOfService: new Date(req.body.DateOfService),
        ServiceName: req.body.ServiceName,
        serviceType : req.body.serviceType,
        isCompleted: false
    });

    gService.genericSave(newService, req, res)
});

Router.delete('/:id', (req, res) => {
    gService.genericDeletion(servicesOffered, req, res);
});

Router.put('/:UserId/userId', (req, res) => {
    gService.genericServiceUpdate(servicesOffered, req, res);
});

Router.put('/:id', (req, res) => {
    gService.genericUpdate(servicesOffered, req, res);
});



module.exports = Router;

