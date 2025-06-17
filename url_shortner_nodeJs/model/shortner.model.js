import { readFile, writeFile } from "fs/promises";
import path from "path";

// data through database(monngoDB)
import { dbClient } from "../config/db.client.js";
import { env } from "../config/env.js";

const db=dbClient.db(env.MONGO_DATABASE_NAME)
const shortenerCollection=db.collection("shortener")

export const loadLinks=async()=>{
  return shortenerCollection.find().toArray()
}

export const saveLinks=async(links)=>{
  return shortenerCollection.insertOne(links)
}

export const getLinkByShortCode=async(ShortCode)=>{
  return shortenerCollection.findOne({shortCode:ShortCode})
}
// data through file
// const DATA_FILE = path.join("data", "links.json");
// export const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}));
//       return {};
//     }
//     console.log(error)
//     throw error;
//   }
// };

// export const saveLinks = async (links) => {
//     await writeFile(DATA_FILE, JSON.stringify(links));
//   };