import express from "express";
import { sendMail} from "./controller/controller.js";

const app =express()

let PORT=3001

app.get("/",(req,res)=>{
    res.send("Hello server..")
})

app.get("/sendmail",sendMail)

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})