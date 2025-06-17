const fs=require('fs')
const path=require('path')

const fileName="fs_Async_module.txt"
const filePath=path.join(__dirname,fileName)

// fs.writeFile(filePath,"This is the initial Data","utf-8",
// (error)=>{
//     if(error) console.error(error)
//     else console.log("File saved successfully..")
// }
// )

// const readFile=fs.readFile(filePath,"utf-8",(err,data)=>{
//     if(err) console.log("error occured")
//     else {console.log("readed")
//      console.log(data)
// }
// 
// console.log(readFile)

// fs.appendFile(filePath,"\n new line added","utf-8",
//     (err)=>{
//         if(err) console.log(err)
//         else console.log("line added")
//     }
// )

// fs.unlink(filePath,(err)=>{
//     if(err) console.log(err)
//     else console.log("deleted")
// })

const newFilePathName="new_fs_sync_module.txt"
fs.rename(filePath,newFilePathName,()=>{
    console.log("renamed..")
})