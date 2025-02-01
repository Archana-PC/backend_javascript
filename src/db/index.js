import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



 const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)//mongoose retrun an Object that we can store in variable

        console.log(`\n Mangodb connected !! DB HOST ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("Mango Db connection Error",error);
        process.exit(1)//I node process is refrence of process and process means the app is an process and Exit is an method
    }
}

export default connectDB;