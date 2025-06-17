
import mongoose from "mongoose";
// import { middlewareFunc } from "../middleware/middleware.js";



export const UserScehma = mongoose.Schema({

    name: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
 },
 {
    timestamps:true
 }
)

// middlewareFunc(UserScehma)

export const Users=mongoose.model("User",UserScehma)
