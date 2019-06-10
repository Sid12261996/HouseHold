exports.genericFindAll = function (repo, req, res) {
    repo.find().exec().then(doc => {
        res.status(200).json(doc);
    }).catch(err => {
        res.status(500).json(err)
    })
}

exports.genericFindById = function (repo, req, res) {
    id = req.params.id;
    repo.findById(id).then(services => {
        if (!services) {
            return res.status(404).json({message: 'service not found'})
        } else {
            res.status(200).json({services});
        }
    }).catch(err => {
        res.status(500).json({err})
    })
}


exports.genericDeletion = function (repo, req, res) {
    id = req.params.id;
    repo.findOneAndDelete({_id: id})
        .exec()
        .then(result => {
            console.log('deleted user', result)
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}


exports.genericUpdate = function (repo,req, res,image=false,imgUrl=null) {
    const id = req.body.id||req.params.id;
    const updateOps = {};
    let iter = req.body;
    for (let ele of Object.keys(iter)) {
        updateOps[ele] = iter[ele];
    }
    if(image){
        updateOps['ImageUrl'] = imgUrl;
    }

    console.log(updateOps)
    repo.findOneAndUpdate({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {

            res.status(200).json({
                message: " updated",result:result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}



exports.genericServiceUpdate = function (repo,req, res) {
    const id = req.params.UserId;
    const updateOps = {};
    let iter = req.body;
    for (let ele of Object.keys(iter)) {
        updateOps[ele] = iter[ele];
    }
    repo.findOneAndUpdate({UserId: id}, {$set: updateOps})
        .exec()
        .then(result => {

            res.status(200).json({
                message: " updated",result:result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.genericFind = function (repo,req,res,findExpression) {

console.log(findExpression)
    repo.find(findExpression)

        .exec()
        .then(result => {
console.log(result)
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.genericSave = function (repo,req,res) {
    repo.save().then(data=>{
        if(data){
            return res.status(200).json({messqage: 'Succes',data:data});
        }
    }).catch(err=>console.error(err));
}
