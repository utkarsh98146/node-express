import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/carrer", (req, res) => {
  console.log(req.query);
  res.send(`<h1>IONS Carreer Pag for ${req.query.search} </h1>`);
});

app.get("/about/:fields", (req, res) => {
  console.log(req.params);
  res.send(`<h1> Infosys about page and fields is ${req.params.fields}</h1>`);
});

app.get("/", (req, res) => {
  //   console.log(__dirname);
  //   console.log(__filename);

  console.log(import.meta.dirname);

  // const homepagePath = path.join(import.meta.dirname, "public", "index.html");
  // res.sendFile(homepagePath);

  // OR
});

app.listen(PORT, () => {
  console.log(`Server is running at port :${PORT}`);
});
