import crypto from 'crypto'
// import { readFile, writeFile } from "fs/promises";
// import path from "path";
import { loadLinks,saveLinks,getLinkByShortCode } from '../model/shortner.model.js';

export const getShortenerPage = async (req, res) => {
    try {
    //   const file = await readFile(path.join("views", "index.html"));

      const links = await loadLinks();
    
      return res.render("index",{links,host:req.hostname})

    //   const content = file.toString().replaceAll(
    //     "{{shortened-urls}}",
    //     Object.entries(links)
    //       .map(
    //         ([shortCode, url]) =>{
    //             url=url.length>30 ? `${url.slice(0,30)}...`:url
    //           return `<li><a href="/${shortCode}" target="_blank">${req.hostname}/${shortCode}</a> - ${url}</li>`
    //         })
    //       .join("")
    //   );
    //   return res.send(content);
        
    } catch (error) {
        console.log(error)
      return res.status(500).send("Internal server error.");
    }
}

export const postshortener=async (req, res) => {  
    try {
      const { url, shortCode } = req.body;
      const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
  
      const links = await loadLinks();
  
      if (links[finalShortCode]) {
        return res
          .status(400)
          .send("Short code already exits. Please choose different one.");
      }
      // links[finalShortCode] = url;
      // await saveLinks(links);

      await saveLinks({url,shortCode})

      return res.redirect("/");
    } catch (error) {
        console.log(error)
      return res.status(500).send("Internal server error.");
    }
}    



export const redirectToShortLink= async (req, res) => {
    try {
      const { shortCode } = req.params;
      // const links = await loadLinks();

      const link=await getLinkByShortCode(shortCode)
  
      // if (!links[shortCode]) {
      //   return res.status(404).send("404 error occurred");
      // }

      if(!link){
        return res.redirect("/404")
      }

      return res.redirect(link.url);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error");
    }
  }
