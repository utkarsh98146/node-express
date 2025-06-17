import { readFile, writeFile } from "fs/promises";
import path from "path";
import { Router } from "express";
import { postshortener,getShortenerPage,redirectToShortLink } from "../controllers/postshortener.controller.js";

const router = Router();

const DATA_FILE = path.join("data", "links.json");
const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};
 
router.get("/report",(req,res)=>{
  // res.send("Hi report page") send only html 

  // const student=[{
  //   name:"utkarsh",
  //   grade:"10th",
  //   favoriteSubject:"math"
  // },
  // {
  //   name:"aman",
  //   grade:"10th",
  //   favoriteSubject:"sci"
  // },
  // {
  //   name:"shubh",
  //   grade:"10th",
  //   favoriteSubject:"eng"
  // },]
  // res.render("report",{student})
})

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

router.get("/", getShortenerPage);

router.post("/",postshortener)

router.get("/:shortCode", redirectToShortLink);

// router.post("/", async (req, res) => {
//   try {
//     const { url, shortCode } = req.body;
//     const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

//     const links = await loadLinks();

//     if (links[finalShortCode]) {
//       return res
//         .status(400)
//         .send("Short code already exits. Please choose different one.");
//     }
//     links[finalShortCode] = url;

//     await saveLinks(links);
//     return res.redirect("/");
//   } catch (error) {
//     return res.status(500).send("Internal server error.");
//   }
// });



export default router;
