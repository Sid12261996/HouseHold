const Users = require('../../Models/AppUser'),
Router = require('express').Router(),
mongoose = require('mongoose'),
jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt');

var privateKey="addjfbskLFDJfj32784hsankzdcdsKisfhajnkoo;fsd";
//api/User/Register
Router.post('/Register',(req,res)=>{

    Users.find({"Email":req.body.Email}).exec()
    .then(data=>{
        if(data.length>0){
          
            res.json({message:"UserName or Email already Exists"});
        }else{
            bcrypt.hash(req.body.Password,10,(err,hash)=>{

                    if(err){throw err}
           console.log(req.body.Password)

                    RegisterUser = new Users({_id: new mongoose.Types.ObjectId(),
                        Username:req.body.Username
                        ,Email:req.body.Email,
                        Password:hash,
                        ConfirmPassword:hash,
                        PhoneNumber:req.body.PhoneNumber,
                        State:req.body.State,
                        Country:req.body.Country,
                        Role:req.body.Role||'Customer' 
                        });
                
                        RegisterUser.save().then(result=>{
                          
                            res.json({message:'Successfully Saved',result});
                        }).catch(err=>{console.log(err)})

            })
        }
    }).catch(err=>{console.log(err)})

   
});


//api/User/Login
Router.post('/Login',(req,res)=>{
    user = new Users();
    Users.find({Email:req.body.Email.trim()}).exec().then(data=>{
        console.log(req.body.Email) 
        console.log(data) 
        if( data.length > 0){
            user = data[0];
            
            bcrypt.compare(req.body.Password,user.Password,(err,result)=>{
                 console.log(result) 
                if(err){
                    res.json({message:'Authorization Failed! Password Incorrect!'})
                }
           
                else{
                if(result){
                     console.log();
                    jwt.sign({Username:user.Username,Email:user.Email},process.env.jwtprivatkey||privateKey,(err,token)=>{
                        if(err)
                            {console.error(err)} 
                    res.json({message:"Success",token,user})
                    });
                
                }
                else{
                    res.json({message:'Password Incorrect! '})
                }}
            })
            

        }
        else{
            res.json({message:'Username is incorrect!'});
        }
    })

   
});
 //api/User/getByEmail
 Router.get('/GetByEmail',(req,res)=>{
     res.json({mesage:'Email is Working'});
 });
module.exports=Router;