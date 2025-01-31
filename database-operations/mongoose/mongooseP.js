import mongoose from "mongoose";

 const connectDb =async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/mongoose_db")
        console.log("Connection established...")
        mongoose.set("debug",true)
    } catch (error) {
        console.log("Connection fails")
        process.exit()
    }
} 

// step 2 create schema
const userScehma=mongoose.Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    age:{type:Number,min:10,max:100},
    createdAt:{type:Date,default:Date.now()}
})

// step 3 create model

const User=mongoose.model("userDB",userScehma)

connectDb()
User.create({name:'rajesh',gender:"male",email:"r@test.in",age:22})

// simple way to connect

/*
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("debug", true);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

// Step 2: Create schema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: { type: Number, min: 10, max: 100 },
});

// Step 3: Create model
const User = mongoose.model("userDB", userSchema);
*/