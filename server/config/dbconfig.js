const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(`${process.env.DB_URL}`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        }).then(()=>{
            console.log('Database connected');
        })
        
    }catch(err){
        console.log("Error connecting to database: ", err);
        process.exit(1);
    }
}

module.exports = connectDB;