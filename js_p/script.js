// // console.log("hello console..")

// //const { appendFile } = require("fs")

// // const { resolve } = require("path")

// let mode=document.querySelector("#toggleMode")
// // console.dir(mode)
// let body=document.querySelector("body")

// let currMode="light"

// mode.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark"
//         body.classList.add(currMode)
//         console.log(currMode)
//         body.classList.remove("light")
//     }
//     else{
//         currMode="light"
//         body.classList.add(currMode)
//         console.log(currMode)
//         body.classList.remove("dark")
//     }

// })

// let DATA="data is secrete"
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }

//     viewData(){
//         console.log("data = "+DATA)
//     }

// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//     }

//     editData(){
//         DATA="now data is edited"
//     }
// }
//  let user1=new User("ram","ram@test.com")
//  let admin1=new Admin("ramu","test@test.in")

// Normal Call back function

// function sum(a,b){
//     console.log(a+b);
// }

// function calculate(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculate(1,2,sum)

// call back with arrow()

// function calculate(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculate(31,3,(a,b)=>{
//     console.log(a+b)
// })

// call back hell

// // function defining
// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data ", dataId)
//         if(getNextData){
//             getNextData()
//         }

//     }, 2000);
// }

// // calling
// getData(1,()=>{
//     console.log("getting data 2..")
//     getData(2,()=>{
//         console.log("getting data 3..")
//         getData(3,()=>{
//             console.log("getting data 4..")
//             getData(4)
//         })
//     })
// })

// Promises

// normal example
// let promise=new Promise((resolve,reject)=>{
//     console.log("promise checking..")
//     // resolve("promise resolved....")
//     reject("promise rejected.")
// })

// realtime use

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log("data ",dataId)
//            resolve("success...")
//            if(getNextData){
//             getNextData()
//            }
//        },7000)
//     })
// }

// const getPromise=()=>{
//     return  new Promise((res,rej)=>{
//         console.log("I am a promise");
//         res("success..")
//         // rej("rejected...")
//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled..",res)
// })

// promise.catch((error)=>{
//     console.log("rejected due to ",error)
// })

// Async

// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("success..")
//         },4000)
//     })
// }

// console.log("fetching data 1....")

// let p1=asyncFun1()
// p1.then((res)=>{
//     console.log(res)
// })

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("success..")
//         },4000)
//     })
// }

// console.log("fetching data 2....")

// let p2=asyncFun2()
// p2.then((res)=>{
//     console.log(res)
// })

//    OR ////

// function asyncFun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 1")
//             resolve("success..")
//         },4000)
//     })
// }

// function asyncFun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data 2")
//             resolve("success..")
//         },4000)
//     })
// }

// console.log("data 1 fetching...")
// let p1=asyncFun1();
// p1.then((res)=>{
//     console.log(res)
//     console.log("data 2 fetching..")
//     let p2=asyncFun2()
//     p2.then((res)=>{
//         console.log(res)
//     })
// })

// or

// console.log("data 1 fetching..")
// asyncFun1().then((res)=>{
//     console.log(res)
//     console.log("data 2 fetching..")
//     asyncFun2().then((res)=>{
//         console.log(res)
//     })
// })

// Async

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("api fetched.. ")
//         },2000)
//     })
// }

// async function weatherApi(){
//     await api()
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", dataId);
      resolve("success...");
    }, 3000);
  });
}

// async function getAllData(){
//     console.log("data 1 fetching..")
//     await getData(1)
//     console.log("data 2 fetching..")
//     await getData(2)
//     console.log("data 3 fetching..")
//     await getData(3)
// }

// Or through IIFE way

// (async function (){
//     console.log("data 1 fetching..")
//     await getData(1)
//     console.log("data 2 fetching..")
//     await getData(2)
//     console.log("data 3 fetching..")
//     await getData(3)
// })()

// Fetch API

// const URL= "https://jsonplaceholder.typicode.com/todos"
// const value=document.querySelector("#name")
// const getList=async ()=>{
//     let response=await fetch(URL)
//     console.log(response)
//     let data=await response.json()
//     value.innerText=data[0].id
// }const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const BASE_URL =
  "https://api.unirateapi.com/api/rates?" +
  "api_key=FIb4RVXcSGaJbGLQ77bcm4m5IdqSdaUsSwHZNZT0PfIeZGNK38kCQFzfgTjw67p3&"; // Point to the local JSON file

const dropdowns = document.querySelectorAll(".dropdown select");
const fromFlag = document.querySelector("#from-flag");
const toFlag = document.querySelector("#to-flag");

// Populate dropdowns with country codes
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currCode.toLowerCase(); // Match JSON keys (lowercase)
    newOption.innerText = currCode;
    select.appendChild(newOption);
  }
}

// Update flag based on selected currency
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("change", (event) => {
    const selectedCurrency = event.target.value.toUpperCase(); // Get selected currency code
    const flagImg = event.target.name === "from" ? fromFlag : toFlag; // Determine which flag to update
    flagImg.src = `https://flagsapi.com/${countryList[selectedCurrency]}/flat/64.png`; // Update flag image
  });
});

// Handle conversion logic
const form = document.querySelector("form");
const msg = document.querySelector(".msg");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const amountInput = form.querySelector("input").value;
  const fromCurrency = form.querySelector("select[name='from']").value;
  const toCurrency = form.querySelector("select[name='to']").value;

  if (!amountInput || isNaN(amountInput)) {
    msg.innerText = "Please enter a valid amount.";
    return;
  }

  try {
    const response = await fetch(BASE_URL); // Load the local JSON file
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const rate = data[fromCurrency]?.[toCurrency]; // Access nested JSON data

    if (rate) {
      const convertedAmount = (amountInput * rate).toFixed(2);
      msg.innerText = `${amountInput} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
    } else {
      msg.innerText = "Conversion rate not available.";
    }
  } catch (error) {
    msg.innerText = "Error loading conversion data. Please try again.";
    console.error("Fetch error:", error);
  }
});
