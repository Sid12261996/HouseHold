const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    let JwtKey = require('../../nodemon').env.jwtKey;

    if(!JwtKey){
        JwtKey=process.env.JwtKey;
    }

    try {
        const token = req.headers.authorization.split( " ")[1];
        console.log(token,"Oif")
        const decoded = jwt.verify(token, JwtKey);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}
