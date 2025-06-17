 import { Router } from "express";

import { User } from "../model/User.js";

const router= Router()

router.get("/",(req,res)=>{
    res.sendFile("index.html",{root:"views"})
})

router.post("/submit",async(req,res)=>{
    const {name,email,phone,salary,age}=req.body

   try {
    const newUser = new User({
        name,
        email,
        phone,
        salary,
        age,
      })
      await newUser.save()
      res.send("Details saved...")
    
   } catch (error) {
    res.status(500).send("Something happen wrong!!")
   }
    
    res.send("Details saved succesfully...")
})

// router.get("/users",async(req,res)=>{
//    try {
//     const users=await User.find()
//     res.json(users)
//    } catch (error) {
//     res.status(500).send("Failed to fetch users!!")
//    }
// })

export default router