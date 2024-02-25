const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;



//middleware
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: 'tmp'
    })
)

//connect to database
const connectDB = require("./config/dbconfig");
connectDB();

//connect to cloudinary
const connectCloudinary = require("./config/cloudinaryConfig");
connectCloudinary();

//importing routes
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const badgeRoutes = require('./routes/badge');

//use routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/task', taskRoutes);
app.use('/api/v1/badge', badgeRoutes);

app.get('/', (req, res)=>{
    res.send('Server is running');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
