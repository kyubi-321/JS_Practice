
function findSecondLargest(arr){

    const sortedArr = [...arr].sort((a, b) => b - a);

  if (sortedArr.length < 2) {
    return "The array doesn't have a second largest element.";
  }

  return sortedArr[1];

}

arr=[1,2,3,4,5,67,4,2,2,,3,5,666,3,2,22,99];
const secondLargest = findSecondLargest(arr);

console.log(secondLargest);