import bodyParser from "body-parser";
import express from'express'
import cors from 'cors'
import { dbConnect } from "./config/db.js";
import { router } from "./routes/router.js";
import dotenv from 'dotenv'

dotenv.config()

const app=express()

// db to connect
dbConnect()

//ejs for views
app.set('view engine',"ejs")
app.use(express.static('public'))

//middleware
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
// app.use(cors())



//routes import 
app.use("/",router)

// error handling

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`)
})