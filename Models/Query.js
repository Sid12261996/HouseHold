var mongoose= require('mongoose'),
mongodb= require('mongodb').MongoClient;

 function Query(){
       

}
module.exports= class MongoContext{
     constructor(collxn){
        
        mongodb.connect(URL,{useNewUrlParser:true},(err,db)=>{
            if(err) throw err;
            var dbo = db.db('HouseHoldsDatabase');
             dbo.collection(collxn).find({}).toArray((err,result)=>{
                if(err) throw err;
           
             
                    return(result);
                
            }); 
        });
     }
}


     URL='mongodb+srv://Sidharth:RapItUp@cluster0-jls4z.azure.mongodb.net/test?retryWrites=true';
     MongoX = new Promise(function (resolve,rej){
        mongodb.connect(URL,{useNewUrlParser:true},(err,db)=>{
            if(err) throw err;
            var dbo = db.db('HouseHoldsDatabase');
             dbo.collection("Users").find({}).toArray((err,result)=>{
                if(err) throw err;
           
             
                    resolve(result);
                
            }); 
        });
    });


module.exports.MongoX=MongoX;
module.exports.Query=Query;