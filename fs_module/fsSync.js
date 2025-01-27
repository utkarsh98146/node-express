//  console.log("ki")
//  console.log("hi")
 
 const path=require('path')
 const fs=require('fs')
 const fileName="text.txt"
 const filePath=path.join(__dirname,fileName)
 console.log(filePath)

 const writeFile=fs.writeFileSync(
    fileName,"This is dummy data",
    "utf-8"
 )
   

// const readFile=fs.readFileSync(filePath,"utf-8")
// console.log(readFile)   

// const appendFile=fs.appendFileSync(
//     filePath,
//     "\nthis is new line text",
//     "utf-8"
//     )
     
// console.log(appendFile)

// const deleteFile=fs.unlinkSync(filePath)
// console.log(deleteFile)  

//const oldName="iugsd.txt"


const newFileName="demo.txt"
const newFilePath=path.join(__dirname,newFileName)
const renameFileName=fs.renameSync(filePath,newFilePath)
