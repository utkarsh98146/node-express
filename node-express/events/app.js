console.log("Js")

const EventEmitter=require('events')

const emitter=new EventEmitter()

// emitter.on("show",()=>{
//     console.log("hey name is Utkarsh")
//     console.log("Java Developer")
//     console.log("SPringBoot Developer")
// })
// emitter.on("view",(username)=>{
//     console.log("hey name is "+username)
//     console.log(`${username} is Java Developer`)
//     console.log("SPringBoot Developer")
// })

// emitter.emit("view","Utkarsh")     


//  task 1 on events 


const eventCount={
    "user-login":0,
    "usser-purchase":0,
    "user-logout":0,
    "profile-update":0,
}


emitter.on("user-login",(user)=>{
    console.log(`${user} log in..`)
    eventCount['user-login']++
})
emitter.on("user-purchase",(user,items)=>{
    console.log(`${user} purchase these ${items}`)
    eventCount['usser-purchase']++
})
emitter.on("profile-update",(user,field)=>{
    console.log(`${user} update this ${field}`)
    eventCount['profile-update']++
})
emitter.on("user-logout",(user)=>{
    console.log(`$[user] logged out`)
    eventCount['user-logout']++
})

emitter.on("summary",()=>{
    console.log(eventCount)
})
emitter.emit("user-login","Utkarsh")
emitter.emit("user-purchase","Utkarsh","lapi")
emitter.emit("profile-update","Utkarsh","email")
emitter.emit("user-logout","Utkarsh")
emitter.emit("user-logout","Utkarsh")
emitter.emit("user-logout","Utkarsh")

emitter.emit("summary")