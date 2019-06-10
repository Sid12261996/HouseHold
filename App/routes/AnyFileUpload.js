const multer = require('multer'),
Users= require('../../Models/AppUser')
    Router = require('express').Router(),
gCrud=require('../genericFunctions/genericFunctions'),
    path=require('path');


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
});

const profileUpload = multer({storage:storage,limits:{fileSize:1024*1024*10}});

Router.post('/',profileUpload.single('displayPic'),(req,res)=>{
    let sample = {};
    sample['file'] = req.file;

    // console.log(path.join('localhost:3000/',  sample['file'].path),sample);
   let imgUrl = path.join('https://householdapi.herokuapp.com/',  sample['file'].path);
    console.log(imgUrl)
    gCrud.genericUpdate(Users,req,res,true,imgUrl)

})
module.exports= Router;
