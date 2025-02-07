import mongoose, {Schema}from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new  Schema(
    {

       username:{
         type:String,
         required:true,
         unquie:true,
         lowecase:true,
         trim:true,
         index:true,
       },

       email:{
        type:String,
        required:true,
        unquie:true,
        lowecase:true,
        trim:true,
        index:true,
       },

       fullname:{
        type:String,
        lowecase:true,
        trim:true,
        index:true,
       },

       avatar:{
        type:String,//Cloudnary Url
        required:true,
       },

       coverImage:{
        type:String,//Cloudnary Url
        required:true,
       },

       watchHistory:
       [
        {
            type:Schema.Types.ObjectId,
            ref:"Video", 
        }
       ],

       password:{
        type:String,
        required: [true,'Password is required']
       },
       refershToken:{
        type:String
       }
    },
    {
      timestamps:true  
    }
) 


userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password,10)
  next()
})

userSchema.methods.isPasswordCorrect = async function
(password){
  return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken = function(){
  jwt.sign(
    {
      _id:this.id,
      email:this.email,
      username:this.username,
      fullname:this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken = function(){
  jwt.sign(
    {
      _id:this.id,
      
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:REFRESH_TOKEN_EXPIRY
    }
  )
}
export const User = mongoose.model("User",userSchema)