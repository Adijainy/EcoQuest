const User = require('../models/user');
const cloudinary = require("cloudinary").v2;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const uploadFileToCloudinary = require('../utills/uploadOnCloudinary');



//create a new user
exports.createUser = async(req, res) => {
    try{
        console.log("req.body: ", req.body);
        const { name, email, password } = req.body;
        const { profilePic } = req.files;
        //validations
        if(!name || !email || !password || !profilePic){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }

        //check if user already exists 
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(401).json({
                success: false,
                error: "User already exists",
                message: "User already exists"
            })
        }

        //generate profile pic url
        let profilePicURL = await uploadFileToCloudinary.uploadFileToCloudinary(profilePic, process.env.CLOUDINARY_FOLDER_NAME);
        if(!profilePicURL){
            return res.status(500).json({
                success: false,
                error: "Server error",
                message: "Error uploading profile pic"
            })
        }
        profilePicURL = profilePicURL.secure_url; 

        const hashedPassword = await bcrypt.hash(password, 10);
        //create new user
        const user = new User({
            name, email, password: hashedPassword, profilePicURL
        });

        //save user to database
        const newUser = await user.save();
        newUser.password = undefined;
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser
        })
    }catch(err){
        console.log("Error creating user: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error creating user"
        })
    }
}

//login controller
exports.loginUser = async(req, res) => {
    try{
        const{email, password} = req.body;
        //validations
        if(!email || !password){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }

        //check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                error: "User does not exist",
                message: "User does not exist. Please sign up"
            })
        }

        //check if password is correct
        if(await bcrypt.compare(password, user.password)){
            const payload = {
                email: user.email,
                id: user._id,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY,{
                expiresIn: '2h',
            });

            user.password = undefined;
            user.token = token;

            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly: true,
            }
            res.cookie("jwtToken", token, options).json({
                success: true,
                token:token,
                user:user,
                message: "User logged in successfully"
            })
        }else{
            return res.status(401).json({
                success: false,
                error: "Invalid password",
                message: "Invalid password"
            })
        }

    }
    catch(err){
        console.log("Error logging in user: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error logging in user"
        })
    }
}