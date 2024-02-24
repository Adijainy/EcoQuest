const jwt = require("jsonwebtoken");

exports.auth = async(req, res, next) => {
    try{
        //extracting token from request;
        const token = req.cookies.jwtToken || req.body.token || req.header("Authorization").replace("Bearer ", "");

        //if token missing
        if(!token){
            return res.status(404).json({
                success: false,
                message: "JWT token is missing"
            })
        }

        //validating token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decode;
        }catch(err){
            return res.status(402).json({
                success: false,
                message: "Error occured while verifying jwt token"
            })
        }
        next();
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Error occured while authenticating user",
            error : err.message,
        })
    }
}

exports.isAdmin = async(req,res,next) => {
    try{
        if(req.user.isAdmin !== true){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for admin only"
            })
        }
        next();
    }catch(err){
        return res.status(401).json({
            success: false,
            message: "User's role cannot be verified"
        })
    }
}