// function findMinMax(arr){
//     min = arr[0];
//     max=arr[0];

//     for(let i=0;i<arr.length;i++){

//         if(arr[i]<min){
//             min = arr[i];

//         }

//         if(arr[i]>max){

//             max=arr[i];

//         }

//     }

//     console.log(min , max);

// }

// arr=[1,2,3,4,5,6,70,-1,5];
// findMinMax(arr);



// Using Math function

arr=[1,2,3,4,5,6,70,-1,5];

const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);
console.log(minValue,maxValue);