const  mongoose = require('mongoose');
const schema = mongoose.Schema;

const Services = new schema({
    _id:schema.Types.ObjectId,
    ServiceName:{type:String,required:true},
    UserId:{type:schema.Types.ObjectId, required:true},
    DateOfService:{type: schema.Types.Date,required:true},
    BookingDate:{type:schema.Types.Date, required:true},


});

module.exports= mongoose.model( 'UserServices',Services,'UserServices');
