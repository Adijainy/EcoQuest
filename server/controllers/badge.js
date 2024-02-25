const Badge = require('../models/badge');
const User = require('../models/user');
const uploadFileToCloudinary = require('../utills/uploadOnCloudinary');
require('dotenv').config();

//create a new badge
exports.createBadge = async(req, res) => {
    try{
        const {title, pointsReq} = req.body;
        const { badgeFile} = req.files;

        //validations
        if(!title || !badgeFile || !pointsReq){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }

        //generate badge url
        let badgeURL = await uploadFileToCloudinary.uploadFileToCloudinary(badgeFile, process.env.CLOUDINARY_FOLDER_NAME);
        if(!badgeURL){
            return res.status(500).json({
                success: false,
                error: "Server error",
                message: "Error uploading badge"
            })
        }
        badgeURL = badgeURL.secure_url;

        const newBadge = new Badge({
            title, badgeURL, pointsReq
        });
        const badge = await newBadge.save();
        return res.status(201).json({
            success: true,
            message: "Badge created successfully",
            data: badge
        })
    }catch(err){
        console.log("Error creating badge: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error creating badge"
        })
    }
}

//get all badges
exports.getAllBadges = async(req, res) => {
    try{
        const badges = await Badge.find();
        return res.status(200).json({
            success: true,
            message: "All badges",
            data: badges
        })
    }catch(err){
        console.log("Error getting badges: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error getting badges"
        })
    }
}

//allot a badge to a user
exports.allotBadge = async(req, res) => {
    try{
        const {userId, badgeId} = req.body;
        if(!userId || !badgeId){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }
        const badge = await Badge.findById(badgeId);
        if(!badge){
            return res.status(404).json({
                success: false,
                error: "Badge not found",
                message: "Badge not found"
            })
        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success: false,
                error: "User not found",
                message: "User not found"
            })
        }
        user.badges.push(badgeId);
        await user.save();
        return res.status(200).json({
            success: true,
            message: "Badge allotted successfully"
        })
    }catch(err){
        console.log("Error allotting badge: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error allotting badge"
        })
    }
}

//get all badges of a user
exports.getUserBadges = async(req, res) => {
    try{
        const {userId} = req.body;
        if(!userId){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }
        const user = await User.findById(userId).populate('badges').exec();
        if(!user){
            return res.status(404).json({
                success: false,
                error: "User not found",
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User badges",
            data: user.badges
        })
    }catch(err){
        console.log("Error getting user badges: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error getting user badges"
        })
    }
}
