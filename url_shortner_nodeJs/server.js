import express from "express";
import router from "./routes/shortener.routes.js";
// import http from "http";
// import { json } from "stream/consumers";
// import { link } from "fs";

const app = express();

const PORT = 3006;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// express router using
app.use(router);

app.set("view engine","ejs")

//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-
// const serveFile = async (res, filePath, contentType) => {
//   try {
//     const data = await readFile(filePath);
//     res.writeHead(200, { "Content-Type": contentType });
//     res.end(data);
//   } catch (error) {https://github.com/thapatechnical/urlshortener/commit/f7fddb148b9015f43eaaa66b2ce0d60876a586f1
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("<h1>404 Not Found</h1>");
//   }
// };

// const server = http.createServer(async (req, res) => {
//   console.log(req.url);
//   if (req.method === "GET") {
//     if (req.url === "/") {
//       return serveFile(res, path.join("public", "index.html"), "text/html");
//     } else if (req.url === "/style.css") {
//       return serveFile(res, path.join("public", "style.css"), "text/css");
//     } else if (req.url === "/links") {
//       const links = await loadLinks();

//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify(links));
//     } else {
//       const links = await loadLinks();
//       const shortCode = req.url.slice(1);

//       console.log("link redirected to ..r.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });", req.url);

//       //   if (links[shortCode]) {
// server.lisconsole.log(`Server is running on http://localhost:${PORT}`);
// });ten(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//     res.writeHead(302, { location: links[shortCode] });
//       //     return res.end();
//       //   }
//       //   res.writeHead(404, { "Content-Type": "text/plain" });
//       //   return res.end("Shortened Url is not found.");
//     }
//   }

//   //   if (req.method === "POST" && req.url === "/shorten") {
//   //     const links = await loadLinks();
//   //     let body = "";

//   //     req.on("data", (chunk) => {
//   //       body += chunk;
//   //     });
//   //     req.on("end", async () => {
//   //       console.log(body);
//   //       const { url, shortCode } = JSON.parse(body);

//   //       if (!url) {
//   //         res.writeHead(4000, { "Content-Type": "text/plain" });
//   //         return res.end("URL is needed.");
//   //       }

//   //       const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

//   //       if (links[finalShortCode]) {
//   //         res.writeHead(404, { "Content-Type": "text/plain" });
//   //         return res.end(
//   //           "Short code already exists. Please try with different short code."
//   //         );
//   //       }

//   //       links[finalShortCode] = url;
//  server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//       await saveLinks(links);

//   //       res.writeHead(200, { "Content-Type": "application/json" });
//   //       res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
//   //     });
//   //   }
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-**


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
