const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//connect to database
const connectDB = require("./config/dbconfig");
connectDB();

//connect to cloudinary
const connectCloudinary = require("./config/cloudinaryConfig");
connectCloudinary();

app.get('/', (req, res)=>{
    res.send('Server is running');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
