var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AppUser = new schema( {
    _id:schema.Types.ObjectId,
    Username: String,
     Email:String,
     Password: String,
     ConfirmPassword: String,
     PhoneNumber: Number,
     Address: String,
     State: String,
     Country: String
});
    exports.AppUser;
