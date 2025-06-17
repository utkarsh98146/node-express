import mongoose from "mongoose"
// schema define the structure and rules for document store in mongodb collection

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    salary:{
        type:Number
    },
    age:{
        type:Number,
        min:0,
        max:100
    }
})
// model is collection in mongodb where documents are stored.

export const User=mongoose.model("User",userSchema)