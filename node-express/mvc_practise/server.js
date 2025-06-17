import express  from "express";
import dotenv from 'dotenv'
import router from "./routes/router.js";
import {connectDB} from "./config/connection.js"


dotenv.config()
const PORT=process.env.PORT||3000

const app=express()

// middleware => fetching from ui, controller
// for extraxting form data simple way
app.use(express.urlencoded({extended:true}))

// convert the javascript object into json form
app.use(express.json())

// fetching the static 
app.use(express.static("views"))


// Database 
connectDB().then(()=>{
    app.use("/",router)
}).catch((err)=>{
    console.log("Connection failed..")
})



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
