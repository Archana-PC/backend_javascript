
// require('dotenv').config({path:'./env'})
// or import 'dotenv/config' if you're using ES6
import connectDB from "./db/index.js";
import dotenv from  "dotenv";


dotenv.config({
   path:'./env'
})


connectDB()








// It is a first approch of bd Connection using IFEE
/**import express from "express";

const app = express();

(async()=>{
    try{
       await mongoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error:",error);
        throw err;
       })//on is a App listener using for checking error event that might be occur with Database and Express App

       app.listen(process.env.PORT,()=>{
        console.log(`App is listing on port ${process.env.PORT}`);
       })
    }catch(error){
       console.error("Error:",error);
       throw err;
    }
})()**/
