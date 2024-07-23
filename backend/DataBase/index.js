const mongoose =require('mongoose');
const{ MONGODB_CONNECTION_STRING}=require('../config/index')

const connectionString= MONGODB_CONNECTION_STRING;
const dbconnected = async()=>{
    try {
        const conn=await mongoose.connect(connectionString);
        console.log(`Database connected to host${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports=dbconnected;