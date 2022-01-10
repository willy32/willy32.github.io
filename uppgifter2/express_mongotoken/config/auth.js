const jwt = require('jsonwebtoken');

function VerifyToken(token){
    try{
        const verify = jwt.verify(token, process.env.JWT);
        if(verify){
            return true;
        }else{
            return false;
        }
    }catch(err){
        return false;
    }
}

module.exports = VerifyToken;