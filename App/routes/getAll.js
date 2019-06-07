var Users = require('../../Models/AppUser'),
express =require('express'),
Router= express.Router(),

mongoose= require('mongoose');

Router.get('/', (req,res)=>{

    Users.find().exec().then(doc=>{
       res.json({doc})
   })
   
});

Router.post('/insert',(req,res)=>{
   
   
    mockUser = new Users({_id: new mongoose.Types.ObjectId(),
        Username:req.body.Username
        ,Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,
        PhoneNumber:req.body.PhoneNumber,
        State:req.body.State,
        Country:req.body.Country   
        });

        mockUser.save().then(result=>{
            console.log(result+"Successfully Saved");
            res.json({mesage:'Successfully Saved ',result});
        }).catch(err=>{console.log(err)})
});

module.exports=Router;
