const http=require('http')

const server=http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write("My name is utkarsh yaduvanshi and your ??") // write on web server
        response.end() // to show to server
    }
    else{
        response.write("Something wrong with the url")
        response.end()
    }
})

const PORT=3000

server.listen(PORT,()=>{
    console.log(`Listening to this Port no ${PORT}`)
})