const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    
    console.log(req.cookies);

    const token = req.cookies.token

    if(!token){
        return res.status(400).send("Token does not exist");
    }

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decode;
    } catch (error) {
        console.log(error);
        return res.status(401).send("Invalid token");
    }
    return next();
}
module.exports = auth;