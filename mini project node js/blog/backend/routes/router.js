import { Router } from "express";
import { blogPage, contactPage, homePage,  postBlog,  viewPage } from "../controller/controller.js";

export const router=Router()

router.get("/",homePage)
router.get("/",homePage)
router.get("/",homePage)



router.post("/submit",postBlog)
 
router.get("/blog",blogPage)
 
router.get("/views",viewPage)
 
router.get("/contact",contactPage)

//to run broswer live with backend also

// browser-sync start --proxy "http://localhost:3001" --files "views/*.ejs, public/*.css"

 