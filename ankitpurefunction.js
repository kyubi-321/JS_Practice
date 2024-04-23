const array = [1,2,3];

function addElement(element){ // this is not a pure function because with each input our array's value is changing
    array.push(element);
    console.log(array);

}

let element = prompt("Enter the number")

addElement(+element); // parseInt(string)  can also be used to convert a string into an integer.
addElement(67);

console.log(array);

// pure function does not mutate the value of our input remember this.