let p1 = new Promise((resolve , reject)=>{

    console.log("Promise1 is pending");

    setTimeout(()=>{
        console.log("I am  promise1 and I am resolved.");
        resolve(true);
    },5000)

})

let p2 = new Promise((resolve , reject)=>{

    console.log("Promise2 is pending");

    setTimeout(()=>{
        console.log("I am  promise2 and I am rejected.");
        reject(new Error("error occurs."));
    },5000)

})

p1.then((value)=>{

    console.log(value);

})

p2.catch((Error)=>{
    console.log(Error);
})