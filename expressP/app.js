// import dotenv from 'dotenv'
import express from 'express'
import {PORT} from './env.js'

// dotenv.config()
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to my page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h2> About page </h2>")
})
// const PORT=3002

// const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running at port :${PORT}`)
})
console.log(process)
