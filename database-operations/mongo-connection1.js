import { MongoClient } from "mongodb";

const run=async ()=>{
    const client = new MongoClient("mongodb://localhost:27017/")
    try{

 await client.connect()

const db=client.db("utkarsh_dbP")
const userCollection=db.collection("admin")

// create

// const result= await userCollection.insertOne({name:"vasi",role:"backend dev"});

// const multipleResult= await userCollection.insertMany
//     ([
//         {
//             name:"vamsi", 
//             age:19
//         },
//         {
//             name:"guru",
//             gender:"male",
//             age:21
//         },
//         {
//             name:"tripura",
//             grade:"A",
//             section:"14"
//         },
//         {
//             movie:"salaar",
//             actor:"prabhas"
//         }
//     ])

// console.log("Document inserted :",result.insertedId)

// read

// const userCursor=userCollection.find()
// console.log(cursor)

// for await (let i of userCursor){
//     console.log(i)
// }

const userCursor=await userCollection.findOne({name:"vasi"})
console.log(userCursor)

} catch(err){
    console.log(err)
    }
    finally{
        await client.close()
        console.log("MongoDb connection closed.")
    }
}
run()