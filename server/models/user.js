const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicURL: {
        type: String,
        required: true,
    },
    badges: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Badge'
        }
    ],
    points:{
        type: Number,
        default: 0
    },
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],
    carbonAvoided:{
        type: Number,
        default: 0
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
    
    

})

module.exports = mongoose.model('User', userSchema);