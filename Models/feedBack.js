const  mongoose = require('mongoose');
const schema = mongoose.Schema;

const feedBack = new schema({
    _id:schema.Types.ObjectId,
    title:{type:String,required:true},
    body:{type:String},
    sentBy:{type:schema.Types.ObjectId, required:true},
    createdAt:{type: schema.Types.Date,required:true},
    rating:{type: schema.Types.Number},
    replyId:{type: schema.Types.ObjectId},



});

module.exports= mongoose.model( 'feedBack',feedBack,'feedBack');
