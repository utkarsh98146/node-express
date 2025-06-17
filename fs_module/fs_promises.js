console.log("Hi console")

const fs=require('fs/promises')
const path=require('path')

const fileName="fsPromises.txt"
const filePath=path.join(__dirname,fileName)

const file=__dirname;

// fs.promises
// .readdir(file)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// write 
// const writeFile= async ()=>{
//     try{
//         await fs.writeFile(filePath,"thisw si ilef","utf-8")
//         console.log("file created...")
//     } catch(err){
//         console.log(err)
//     }
// }

// writeFile()


//read 
// const readFile= async ()=>{
//     try{
//         const res=await fs.readFile(filePath,"utf-8")
//         console.log(res)
//         console.log("file readed...")
//     } catch(err){
//         console.log(err)
//     }
// }

// readFile()

//delete
const deleteFile= async ()=>{
    try{
        const res=await fs.unlink(filesPath)
        console.log(res)
        console.log("file readed...")
    } catch(err){
        console.log(err)
    }
}

deleteFile()