import readline  from "readline";


const readln=readline.createInterface({
    input:process.stdin,
    output:process.stdout

})

const todos=[]

 const showMenu= ()=>{
    console.log("\n1. Add A task ")
    console.log("2. View Tasks")
    console.log("3. Exit")
    readln.question("Choose an option : ", handleInput)
 }

 const handleInput= (option)=>{
    if(option==='1'){
        readln.question("Enter the task ",(task)=>{
            todos.push(task)
            console.log("Task added : ",task)
            showMenu()
        })
    }
    else if(option==='2'){
       console.log("Your tasks ")
       todos.forEach((task,index)=>{
        console.log(`${index+1}. ${task}`)
       })
       showMenu()
    }
    else if(option==='3'){
      console.log("Thanks for using us... ")
        readln.close()
    }
    else{
        console.log("you entered wrong option please from the given option only")
        showMenu()
    }
 }
 showMenu()