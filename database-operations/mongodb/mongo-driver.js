import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access the database
    const db = client.db("mongodb_nodejs_db"); // Replace with your database name
    const userCollection = db.collection("usersDB");

    // Insert a document
    const result = await userCollection.insertOne({ name: "utkarsh", age: 21 });
    console.log("Document inserted:", result.insertedId);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection
    await client.close();
  }
}

run();
