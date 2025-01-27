// 1 enter the file name
// 2 enter the content into the file through cli



import readline from 'readline'
import fs from 'fs'


const readln = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


const fileCreation =()=>{
    readln.question("Enter the file name :", (fileName)=>{
        readln.question("Write something into your file : ",(data)=>{
            fs.writeFile(`${fileName}.txt`,data,"utf-8",(err)=>{
                if(err){
                    console.log("Something went wrong..")
                } 
                else{
                    console.log(`File "${fileName}.txt" create successfully..`)
                }
                readln.close()
            })
        })
    })
}

fileCreation()