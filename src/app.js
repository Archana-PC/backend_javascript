import express  from "express"
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"16kb"}))//we are limiting the json data that express can accept and these are for form data

app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"));
app.use(cookieParser())//it is used for setting the cookies into server and get from the website browser and implement curd operation

//In your Express.js application, these lines configure middleware to handle incoming JSON and URL-encoded data


export {app}