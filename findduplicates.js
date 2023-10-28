// function findDuplicates(arr) {
//     const seenElements = {};
//     const duplicateElements = [];
  
//     for (const element of arr) {
//       if (seenElements[element]) {
//         if (!duplicateElements.includes(element)) {
//           duplicateElements.push(element);
//         }
//       } else {
//         seenElements[element] = true;
//       }
//     }
  
//     console.log(duplicateElements);
//   }
  
//   const arr = [1, 2, 4, 2, 3, 4, 566, 76, 4, 5, 5];
//   findDuplicates(arr);
  


// Now we will do it using filter method

// function findDuplicates(arr){

//    const duplicateElements = arr.filter((element,index)=>arr.indexOf(element)!==index)

//     console.log(duplicateElements);  // i don,t know why but it is preneting no. of duplicates if more than 2 times reappearing.

// }


// const arr = [1, 2, 4, 2,2,3,2,2, 3, 4, 566, 76, 4,5,5,6,6,6, 5, 5];
// findDuplicates(arr);

//Now i am pasting here cahtgpt code

// function findDuplicates(arr) {
//     const duplicates = arr.filter((element, index, self) => {
//       return self.indexOf(element) !== index;
//     });
  
//     console.log(duplicates);
//   }
  
//   const arr = [1, 2, 4, 2, 2, 3, 2, 2, 3, 4, 566, 76, 4, 5, 5, 6, 6, 6, 5, 5];
//   findDuplicates(arr);
  
  


//from youtube

const arrNumber = [1,2,2,2,3,3,33,4,4,4,45,6,78,8];

const duplicates = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
console.log(duplicates);