import express  from "express";
import { errorPage } from "./controller/error.js";
import { router } from "./routes/router.js";
const app=express()

app.set("view engine",'ejs')

app.set("views","./views")

// app.get("/",(req,res,next)=>{
//     res.render("index")
// })

app.use(express.static("../backend/public"))

app.use("/",router)

app.use(errorPage)
app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
  });
  
