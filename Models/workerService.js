const  mongoose = require('mongoose');
const schema = mongoose.Schema;

const workerServices = new schema({
    _id:schema.Types.ObjectId,
    ServiceName:{type:String,required:true},
    UserId:{type:schema.Types.ObjectId, required:true},
    serviceDueOn:{type: schema.Types.Date,required:true},
    BookedOn:{type:schema.Types.Date, required:true},
    userServiceId:{type:schema.Types.ObjectId, required:true},


});

module.exports= mongoose.model( 'workerServices',workerServices,'workerServices');
