import { createReadStream, createWriteStream} from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __fileName=fileURLToPath(import.meta.url)
const __dirName=path.dirname(__fileName)
const inputFilePath=path.join(__dirName,"input.txt")
const outputFilePath=path.join(__dirName,"output.txt")

const readableStream =createReadStream(inputFilePath,
    {encoding:"utf-8",
    highWaterMark:14
})

const writeableStream=createWriteStream(outputFilePath)

// readableStream.pipe(writeableStream)

//listen for data chunks
readableStream.on("data",(chunks)=>{
    console.log("Buffers (chunks):",Buffer.from(chunks))
    console.log("Received chunks:",chunks)
    writeableStream.write(chunks)
})


// handle stream end
readableStream.on("end",()=>{
    console.log("File completed...")
    writeableStream.end()
})

// handle errors

readableStream.on("error",(error)=>{
    console.log(error)
})

writeableStream.on("error",(error)=>{
    console.log(error)
}) 