var mongoose = require('mongoose');
var schema = mongoose.Schema;

var RegisteredUser = new schema( {
    _id:schema.Types.ObjectId,
    Username: {type:String,required:true,minlength:3,maxlength:30},
     Email: {type:schema.Types.String,required:true,minlength:3,maxlength:30},
     Password:  {type:schema.Types.String,required:true,minlength:3},
     ConfirmPassword:  {type:String,required:true,minlength:3},
     PhoneNumber:  {type:Number,required:true,minlength:10,maxlength:10},
     Address:  {type:String,minlength:3},
     State:  {type:String,minlength:1,maxlength:15},
     Country:  {type:String,maxlength:15}
});
    module.exports= mongoose.model( 'Users',RegisteredUser,'RegisteredUser');
