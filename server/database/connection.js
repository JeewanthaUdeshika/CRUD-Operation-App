/**
 * This file contains database connection code
*/

const mongoose = require('mongoose');

// Function to connect with  database
const connectDB = async ()=>{
    try{
        // MongoDB conenction string
        const con = await mongoose.connect(process.env.MONGODB_URI, {
            //useNewUrlPaser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
