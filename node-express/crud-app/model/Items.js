import mongoose from "mongoose";

const ItemsSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }
})

export const Items=mongoose.model("Items",ItemsSchema)