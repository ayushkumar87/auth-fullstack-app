const { JsonWebTokenError } = require("jsonwebtoken");
const User=require("../models/User");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

//signup
exports.signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;

        //check if user exists
        const existingUser=await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message:"USer already exists"})
        }

        //Hash Password
        const hashedPassword=await bcrypt.hash(password,10)

        //crerate User 
        const newUser=new User({
            name,
            email,
            password:hashedPassword
        })
        await newUser.save();
        res.json({message : "User registred Sucessfully"})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
}

//login
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        //check user
        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({message:"User not found"})
        }

        //compare password
        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }

        //Genrate Token
        const token=jwt.sign(
            {userId:user._id},
            "secretkey",// 🔥 later we hide this
            {expiresIn:"1h"}
        )

        res.json({message:"Login Sucessful",token})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }    
}