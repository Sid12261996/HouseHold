const workerService = require('../../Models/workerService'),
    express = require('express'),
    Router = express.Router(),
    worker = require('../genericFunctions/genericFunctions'),
    mongoose = require('mongoose');


Router.get('', (req, res) => {
  worker.genericFindAll(workerService,req,res);
});

Router.get('/:id', (req, res) => {
    id = req.params.Id;
    worker.genericFindById(workerService,req,res);
});

Router.get('/:UserId', (req, res) => {
    worker.genericFind(workerService, req, res, {UserId: req.params.UserId});
});

// Router.get('/accepted/:UserId',(req,res)=>{
//     worker.genericFind(workerService,req,res,{$and:[{UserId:req.params.UserId},{isCompleted:'false'}]})
// })
Router.post('', (req, res) => {
    var newWorker = new workerService({
        _id:mongoose.Types.ObjectId(),
        ServiceName:req.body.ServiceName,
        UserId:mongoose.Types.ObjectId(req.body.UserId),
        serviceDueOn:new Date(req.body.serviceDueOn),
        BookedOn: new Date(req.body.BookedOn),
        userServiceId: mongoose.Types.ObjectId(req.body.userServiceId)
    })

    worker.genericSave(newWorker,req,res)
});
Router.delete('', (req, res) => {
    worker.genericDeletion(workerService,req,res);
});

Router.put('', (req, res) => {
    worker.genericUpdate(workerService,req,res);
});

module.exports = Router;
