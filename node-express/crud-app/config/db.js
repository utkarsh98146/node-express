import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()

export const dbConnect=async()=>{

    try {
       await  mongoose.connect(process.env.URI)
      console.log("MongoDB connected.")
      
    } catch (error) {
        console.log("Connectino fails.")
        process.exit(1)
    }
}
