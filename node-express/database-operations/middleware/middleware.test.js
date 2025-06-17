import mongoose from "mongoose";
import { Users } from "../model/User.js";




const mongooseConnect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://yadav01:yadav@cluster0.p7ry5.mongodb.net/mongoose_middleware")
        mongoose.set("debug",true)
    } catch (error) {
        console.log("Connection failed..",error)
        process.exit()
    }
}

await mongooseConnect()
console.log("Connection established...")
//middleware


// create 
// Users.updateOne({
//     name:"utkarsh",
//     age:22,
//     email:"ut@test.in"
// })
// console.log("Data inserted...")

// update
await Users.updateOne({email:"ut@test.in"},{$set:{age:21}})
console.log("Updated...")
// mongoose.connection.close()
// console.log("Connection closed!!")

