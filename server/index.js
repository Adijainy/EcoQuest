const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//connect to database
const connectDB = require("./config/dbconfig");
connectDB();

app.get('/', (req, res)=>{
    res.send('Server is running');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
