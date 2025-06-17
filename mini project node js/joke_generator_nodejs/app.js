import https from 'https'
import chalk from 'chalk'


const base_URL="https://v2.jokeapi.dev/joke/Any"

const getJoke=()=>{
    https.get(base_URL,(response)=>{
        let data=""
        response.on("data",(chunk)=>{
            data+=chunk
        })
        response.on('end',()=>{
            const joke=JSON.parse(data)
            console.log(joke)
            // console.log(`Here a random joke : `)
            console.log(`chalk.red(${joke.type})`)
            console.log(`chalk.green(${joke.setup})`)
            console.log(`chalk.blue.bgRed.bold(${joke.delivery})`)
        })
    })
}

getJoke()