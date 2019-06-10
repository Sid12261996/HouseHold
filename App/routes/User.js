    const Users = require('../../Models/AppUser'),
        Router = require('express').Router(),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    deleteUser = require('../genericFunctions/genericFunctions'),
    multer = require('multer'),
path=require('path');
let JwtKey = require('../../nodemon.json').env.jwtKey;
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './App/ProfilePic')
    },
    filename: (req, file, cb) => {
        console.log(req.hasOwnProperty());
        let text = '';
        const length = 10;
        const possible = 'ABwertgvvdrc445sgf44fC';

        for (let i = 0; i < length; i++) {

            text += possible.charAt(Math.floor(Math.random() * possible.length));

        }
        cb(null, text + '.jpg')
    }
})
const filefilter = (req,file,cb)=>{
    console.log(file.mimeType)
    if(file.mimeType =='image/png'||file.mimeType=='image/jpeg'||file.mimeType=='image/jpg'){
        cb(null,true);
    }else {
        cb(new Error('file extension is not png or jpeg/jpg'),false);
    }
}
const profileUpload = multer({storage:storage,limits:{fileSize:1024*1024*10}});

console.log(JwtKey);
if (!JwtKey) {

    JwtKey = process.env.JwtKey;
}

Router.put('/Profile', profileUpload.single('displayPic'), (req, res) => {
    sample = {};
    sample['file'] = req.file;

   // console.log(path.join('localhost:3000/',  sample['file'].path),sample);
    imgUrl = path.join('https://householdapi.herokuapp.com/',  sample['file'].path);
    console.log(imgUrl)
    deleteUser.genericUpdate(Users,req,res,true,imgUrl)

});
//api/User/Register
Router.post('/Register', (req, res) => {

    Users.find({"Email": req.body.Email}).exec()
        .then(data => {
            if (data.length > 0) {

                res.json({message: "UserName or Email already Exists"});
            } else {
                bcrypt.hash(req.body.Password, 10, (err, hash) => {

                    if (err) {
                        throw err
                    }


                    RegisterUser = new Users(
                        {
                            _id: new mongoose.Types.ObjectId(),
                            Username: req.body.Username
                            , Email: req.body.Email,
                            Password: hash,
                            ConfirmPassword: hash,
                            PhoneNumber: req.body.PhoneNumber,
                            State: req.body.State,
                            Country: req.body.Country,
                            Role: req.body.Role || 'Customer',

                            ImageUrl:'https://householdapi.herokuapp.com/App/ProfilePic/default-user.png',
                            Address:req.body.Address

                        });
console.log(RegisterUser);
                    RegisterUser.save().then(result => {

                        res.json({message: 'Successfully Saved', result});
                    }).catch(err => {
                        console.log(err)
                    })

                })
            }
        }).catch(err => {
        console.log(err)
    })


});


//api/User/Login
Router.post('/Login', (req, res) => {
    user = new Users();
    Users.find({Email: req.body.Email.trim()}).exec().then(data => {


        if (data.length > 0) {
            user = data[0];

            bcrypt.compare(req.body.Password, user.Password, (err, result) => {

                if (err) {
                    res.json({message: 'Authorization Failed! Password Incorrect!'})
                } else {
                    if (result) {

                        jwt.sign({Email: user.Email}, JwtKey, (err, token) => {
                            if (err) {
                                console.error(err)
                            }
                            res.json({message: "Success", token, user})
                        });

                    } else {
                        res.json({message: 'Password Incorrect! '})
                    }
                }
            })


        } else {
            res.json({message: 'Username is incorrect!'});
        }
    })


});
//api/User/getByEmail
Router.get('/GetByEmail', (req, res) => {
    console.log('Working getByemail')
    res.json({mesage: 'Email is Working'});


});

//api/User/:id
Router.delete('/:id', (req, res) => {
    deleteUser.genericDeletion(Users, req, res)


})

//api/User/:id
Router.put('/:id', (req, res) => {
    deleteUser.genericUpdate(Users, req, res)
});
module.exports = Router;
