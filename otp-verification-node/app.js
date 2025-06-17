import mongoose from "mongoose";
import bodyParser from "body-parser";
import twilio from "twilio";
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app =express()

// Twilio Credentials for sms auth
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = new twilio(accountSid, authToken);

// middleware
app.use(cors())
app.use(bodyParser.json())

// db 
mongoose.connect("mongodb+srv://yadav01:yadav@cluster0.p7ry5.mongodb.net/otp-verification")
.then(()=>{
    console.log("MongoDb connected..")
}).catch((err)=>{
    console.log("Connection failed!")
})

const userSchema=new mongoose.Schema({
    phone:{type:Number,required:true},
    otp:{type:String},
    otpExpires:{type:Date},
    isVerified:{type:Boolean,default:false}
})

const User=mongoose.model("UersRegistration",userSchema)

// **📌 API: Send OTP**
app.post("/send-otp",async(req,res)=>{
    const {phone}=req.body
    if(!phone){
        res.status(400).json({message:'Phone number is reuired,Please enter it'})
    }
    try {
        const otp=Math.floor(100000+Math.random()*900000)
        const otpExpires =new Date(Date.now()+30000)
        let user =await User.findOne({phone})
        if(!user){
            user =new User({phone,otp,otpExpires,isVerified:false})
        } else{
            user.otp=otp
            user.otpExpires=otpExpires
        }
        await user.save()
        await client.messages.create({
            body:`Your otp is : ${otp}`,
            from :twilioPhoneNumber,
            to:phone
        })
        res.status(200).json({message:'otp sent successfully '})
    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ message: "Sending OTP failed.", error: error.message });
    }  
})

// **📌 API: Verify OTP**
app.post("/verify-otp",async(req,res)=>{
    const {otp,phone}=req.body
    if(!otp || !phone){
        return res.status(400).json({message:'Phone and otp both are required'})
    } 
    const user=await User.findOne({phone})
    if(!user){
        return res.status(404).json({message:'User not found '})
    }
    if(user.otp===otp && new Date()<user.otpExpires){
        user.isVerified=true
        user.otp=null
        user.otpExpires=null
        await user.save()
        res.status(200).json({message:'Phone number verified successfully..'})
    }
    return res.status(400).json({message:'Invalid otp or otp expired'})
})

// **📌 API: Resend OTP**
app.post("/resend-otp",async(req,res)=>{
    const{phone}=req.body

    if(!phone){
        return res.status(400).json({message:'Phone number required'})
    }
    try {
        const otp=Math.floor(100000+Math.random()*900000)
        const otpExpires =new Date(Date.now()+30000)
        let user =await User.findOne({phone})

        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        user.otp=otp
        user.otpExpires=otpExpires
        await user.save()

        await client.messages.create({
            body:`Your otp is ${otp}`,
            from :twilioPhoneNumber,
            to:phone
        })
        res.status(200).json({message:'Otp send successfully..'})

    } catch (error) {
        res.status(500).json({message:'Error in sending otp',error})
    }
})

// **📌 API: Get User Details (Redirect Home)**
app.get("/user/:phone",async(req,res)=>{
    const {phone}=req.body

    const user=await User.findOne({phone})

    if(!user || !user.isVerified){
        return res.status(401).json({message:'Unauthorized user'})
    }
    res.status(200).json({message:'User authenticated successfully..',user})
})

const PORT=3004
app.listen(PORT,()=>{
   console.log(`Server started on port on ${PORT}`) 
})