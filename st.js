// alert("Hello ankit badhani")

// let a = setTimeout(function() {

//     alert("I am inside setTimeOut")
    
// },5000)

// clearTimeout(a)   // a is the timer id
// console.log(a)

const sum = (a,b)=>{
    console.log("I am running"+ (a+b))
}

setTimeout(sum , 1000 , 7 , 2)

//setInterval is also same syntax as setTimeout just the difference is that set interval runs it regularly on the given interval whereas set timeout runs only one for the given interval