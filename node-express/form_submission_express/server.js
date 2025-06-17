import express from "express";
import path from "path";
const app = express();

// const staticPath = path.join(import.meta.dirname, "public", "index.html");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  console.log("contact page shown...");
  const homepagePath = path.join(import.meta.dirname, "public", "index.html");
  res.sendFile(homepagePath);
});

app.get("/contact", (req, res) => {
  console.log(req.query);
  res.send("ok");
  app.get("/", (req, res) => {
    console.log("contact page shown...");
    const homepagePath = path.join(import.meta.dirname, "public", "index.html");
    res.sendFile(homepagePath);
  });
});
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("submited...");
});

app.use((req, res) => {
  //   res.status(404).send("Page not found.");

  res.sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server stated at https:localhost:${PORT}`);
});
console.log("server work done...");
