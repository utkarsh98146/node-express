import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri=process.env.MONGODB_URI



export const connectDB=async ()=>{
    try{
        await mongoose.connect(uri)
        console.log("Connect to mongoDB successfully...")
    } catch(err){
        console.log("Failed to connect to mongoDB, Please try again")
        process.exit(1)
    }
}

// export const getdb=()=>{
//     dbClient.db(process.env.MONGO_DATABASE_NAME)
// }