const jwt=require("jsonwebtoken")

module.exports=(req,res,next)=>{
    try{
        //Get token from header
        const token=req.header("Authorization")

        if(!token){
             return res.status(401).json({ message: "No token, access denied" });
        }
        //Verify Token
         const decoded = jwt.verify(token, "secretkey");

        //Add user data to req
        req.user=decoded
        next();//move to next step
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}