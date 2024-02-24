const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    badgeURL: {
        type: String,
        required: true,
    },
    pointsReq: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Badge", badgeSchema);