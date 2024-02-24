const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    points: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    carbonAvoided: {
        type: Number,
        required: true,
    },
    unGoals: [
        {
            type: Number,
            required: true,
        }
    ]
})

module.exports = mongoose.model("Task", taskSchema);