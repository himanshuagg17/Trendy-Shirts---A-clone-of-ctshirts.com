const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req,res,next) => {
    console.log("heloo");
    // const token = req.headers.authorization.split(" ")[1];
    const token = req.headers.authorization;
    if(token){
        console.log(token);
        const decoded = jwt.verify(token, process.env.key);
        if(decoded){
            req.body.userID = decoded.userID;
            req.body.date_of_purchase = Date.now();
            next();
        } else {
            res.status(400).send({"msg": "Invalid Token !!"});
        }
    } else {
        res.status(400).send({"msg": "Authentication failed"});
    }
}

module.exports = { auth };